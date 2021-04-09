import { HLogger, ILogger, getCredential } from '@serverless-devs/core';
import _ from 'lodash';
import { CONTEXT } from './constant';
import { ICredentials, isCredentials } from './interface';
import Metrics from './utils/metrics';
import { getFcClient } from './utils/client';


export default class MetricsComponent {
  @HLogger(CONTEXT) logger: ILogger;

  //获取权限
  async getCredentials(
    credentials: {} | ICredentials,
    provider: string,
    accessAlias?: string,
  ): Promise<ICredentials> {
    this.logger.debug(
      `Obtain the key configuration, whether the key needs to be obtained separately: ${_.isEmpty(
        credentials,
      )}`,
    );
    if (isCredentials(credentials)) {
      return credentials;
    }
    return await getCredential(provider, accessAlias);
  }

  //组件入口函数
  async metrics(inputs) {
    this.logger.info('Create Metrics start...');
    const { Properties } = inputs;
    const region: string = Properties.regionId;
    const serviceName: string = Properties.serviceName;
    const functionName: string = Properties.functionName;
    if (!region) {
      this.logger.error(`region is empty.`);
    }
    if (!serviceName) {
      this.logger.error(`serviceName is empty.`);
    }
    if (!functionName) {
      this.logger.error(`functionName is empty.`);
    }

    const {
      ProjectName: projectName,
      Provider: provider,
      AccessAlias: accessAlias,
    } = inputs.Project;
    this.logger.info(`获取入参:[${projectName}] inputs params: ${JSON.stringify(inputs)}`);
    const credentials = await this.getCredentials(inputs.Credentials, provider, accessAlias);
    const metricsClient = new Metrics(inputs.Properties, credentials);
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

}


