import Core from '@alicloud/pop-core';
import { ICredentials } from '../interface';
export declare const getFcClient: (credentials: ICredentials, region: string) => Promise<any>;
export declare const getCmsClient: (credentials: ICredentials) => Core;
export declare const getSLSClient: (credentials: ICredentials, region: string) => any;
export declare const getTraceClicnt: (credentials: ICredentials, region: string) => Core;
