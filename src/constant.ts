import { RetrtyOptions } from './interface';
export const CONTEXT: string = 'FC-METRICS';
export const openBrowser: boolean = false;
export const apiNamespace: string = 'acs_fc';
export const requestOption: string = 'GET';
export const RETRYOPTIONS: RetrtyOptions = {
  retries: 5,
  factor: 2,
  minTimeout: 1 * 1000,
  randomize: true,
};
