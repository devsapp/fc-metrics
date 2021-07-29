import { ILogger } from '@serverless-devs/core';
import { IProperties, ICredentials } from '../interface';
export default class Metrics {
    logger: ILogger;
    logClient: any;
    cmsClient: any;
    buildSLSClient: any;
    getTraceClicnt: any;
    requestOption: string;
    accountId: string;
    accessKeyID: string;
    accessKeySecret: string;
    region: string;
    serviceName: string;
    functionName: string;
    protected credentials: ICredentials;
    constructor(properties: IProperties, credentials: ICredentials);
    getService(tableParams: any): Promise<any>;
    describeFunctionInsights(params: any): Promise<unknown>;
    describeRequestInsights(params: any): Promise<unknown>;
    fetchMetrics(data: any): Promise<any>;
    fetchTrace(data: any): Promise<any>;
    fetchTableList(data: any): Promise<unknown>;
    fetchRequestInfo(data: any): Promise<unknown>;
    start(): Promise<void>;
}
