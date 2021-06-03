import { ILogger } from '@serverless-devs/core';
import { IProperties, ICredentials } from '../interface';
export default class Metrics {
    logger: ILogger;
    logClient: any;
    fcClient: any;
    cmsClient: any;
    requestOption: string;
    accountId: string;
    accessKeyID: string;
    accessKeySecret: string;
    region: string;
    serviceName: string;
    functionName: string;
    constructor(properties: IProperties, credentials: ICredentials);
    fetchMetrics(data: any): Promise<any>;
    start(): Promise<void>;
}
