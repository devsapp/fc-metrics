export interface ICredentials {
    AccountID: string;
    AccessKeyID: string;
    AccessKeySecret: string;
    SecurityToken?: string;
}
export interface IProperties {
    region: string;
    serviceName: string;
    functionName: string;
}
export declare function isCredentials(arg: any): arg is ICredentials;
export interface RetrtyOptions {
    retries: number;
    factor: number;
    minTimeout: number;
    randomize: boolean;
}
export interface AppServer {
    context: any;
    counter: number;
    app: {};
    server: any;
    port: number;
}
