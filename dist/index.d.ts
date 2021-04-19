import { ILogger } from '@serverless-devs/core';
import { ICredentials } from './interface';
export default class MetricsComponent {
    logger: ILogger;
    metrics(inputs: any): Promise<void>;
    getFunction(credentials: ICredentials, region: string, serviceName: string, functionName: string): Promise<Boolean>;
    report(componentName: string, command: string, accountID?: string, access?: string): Promise<void>;
}
