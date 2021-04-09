export interface ICredentials {
  AccountID: string;
  AccessKeyID: string;
  AccessKeySecret: string;
  SecurityToken?: string;
}

export interface IProperties {
  regionId: string;
  serviceName: string;
  functionName: string;
}

export function isCredentials(arg: any): arg is ICredentials {
  return arg.AccessKeyID !== undefined;
}


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
