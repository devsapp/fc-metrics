import { HLogger, ILogger, getCredential, reportComponent, commandParse, help } from '@serverless-devs/core';
import _ from 'lodash';
import { CONTEXT } from './constant';
import { METRICS_HELP_INFO } from './help';
import { ICredentials, IProperties } from './interface';
import Metrics from './utils/metrics';
import { getFcClient } from './utils/client';


export default class MetricsComponent {
  @HLogger(CONTEXT) logger: ILogger;

  // 组件入口函数
  async metrics(inputs) {
    this.logger.info('Creating serivce: Metrics start...');
    const prop: IProperties = inputs?.props;
    const access = inputs?.project?.access;
    const args: string = inputs?.args;
    const comParse: any = commandParse({ args }, {
      boolean: ['help'],
      string: ['region', 'service-name', 'function-name'],
      alias: { help: 'h' },
    })?.data;
    if (comParse?.help) {
      help(METRICS_HELP_INFO);
      return;
    }
    const getConfig = (argsParse, inputsProps) => {
      if (argsParse?.region) {
        return {
          region: argsParse.region,
          serviceName: argsParse['service-name'],
          functionName: argsParse['function-name'],
        };
      }
      return {
        region: inputsProps?.region,
        serviceName: inputsProps?.serviceName,
        functionName: inputsProps?.functionName,
      };
    };

    const { region, serviceName, functionName } = getConfig(comParse, prop);
    this.logger.debug(`[Metrics] region: ${region}, serviceName: ${serviceName}, functionName: ${functionName}, args: ${args}`);
    const credentials: ICredentials = await getCredential(access);
    await this.report('fc-metrics', 'metrics', credentials.AccountID);
    const metricsClient = new Metrics({ region, serviceName, functionName }, credentials);
    const isFindFunction = await this.getFunction(credentials, region, serviceName, functionName);
    // 当函数存在的情况下，启动查询metrics，否则Log写入错误
    if (isFindFunction) {
      await metricsClient.start();
    }
  }

  // 查询当前函数是否合法，合法后才可以进行组件查询
  async getFunction(
    credentials: ICredentials,
    region: string,
    serviceName: string,
    functionName: string,
  ): Promise<Boolean> {
    const fcClient = await getFcClient(credentials, region);
    return await fcClient.getFunction(serviceName, functionName).then((res) => {
      if (res && res.data) {
        this.logger.debug(`Get yml或者command入参:${serviceName},${functionName}`);
        return true;
      } else {
        this.logger.warn(`Reminder yml || command args, 不存在${serviceName} 下的${functionName},请检查yml文件配置或者命令行入参`);
        return false;
      }
    }).catch((e) => {
      this.logger.warn('Reminder yml || command args, 方法不存在,请检查yml文件配置或者命令行入参', e);
      return false;
    });
  }

  async report(componentName: string, command: string, accountID?: string, access?: string): Promise<void> {
    let uid: string = accountID;
    if (_.isEmpty(accountID)) {
      const credentials: ICredentials = await getCredential(access);
      uid = credentials.AccountID;
    }

    reportComponent(componentName, {
      command,
      uid,
    });
  }
}

