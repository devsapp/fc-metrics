import { HLogger, ILogger, getCredential, reportComponent } from '@serverless-devs/core';
import _ from 'lodash';
import { CONTEXT } from './constant';
import { ICredentials, IProperties } from './interface';
import Metrics from './utils/metrics';
import { getFcClient } from './utils/client';


export default class MetricsComponent {
  @HLogger(CONTEXT) logger: ILogger;

  //组件入口函数  
  async metrics(inputs) {
    this.logger.info('Create Metrics start...');
    const prop: IProperties = inputs?.props;
    const region: string = prop.region;
    const serviceName: string = prop.serviceName;
    const functionName: string = prop.functionName;
    if (!region) {
      this.logger.error(`region is empty.`);
    }
    if (!serviceName) {
      this.logger.error(`serviceName is empty.`);
    }
    if (!functionName) {
      this.logger.error(`functionName is empty.`);
    }

    this.logger.debug(`获取入参:inputs params: ${JSON.stringify(prop)}`);
    const access = inputs?.project?.access;
    const credentials: ICredentials = await getCredential(access);
    await this.report('metrics', 'metrics', credentials.AccountID);
    const metricsClient = new Metrics(prop, credentials);
    const isFindFunction = await this.getFunction(credentials, region, serviceName, functionName);
    //当函数存在的情况下，启动查询metrics，否则Log写入错误
    if (isFindFunction) {
      await metricsClient.start();
    }
  }

  //查询当前函数是否合法，合法后才可以进行组件查询
  async getFunction(
    credentials: ICredentials,
    region: string,
    serviceName: string,
    functionName: string
  ): Promise<Boolean> {
    const fcClient = getFcClient(credentials, region);
    return await fcClient.getFunction(serviceName, functionName).then(res => {
      if (res && res.data) {
        this.logger.info(`存在Servics:${serviceName},Function:${functionName}`);
        return true;
      } else {
        this.logger.error(`不存在${serviceName} 下的${functionName}`);
        return false;
      }
    })
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


