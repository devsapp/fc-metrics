import { ILogger } from '@serverless-devs/core';
import { ICredentials } from './interface';
export default class MetricsComponent {
    logger: ILogger;
    getCredentials(credentials: {} | ICredentials, provider: string, accessAlias?: string): Promise<ICredentials>;
    metrics(inputs: any): Promise<void>;
    getFunction(credentials: ICredentials, region: string, serviceName: string, functionName: string): Promise<Boolean>;
}
