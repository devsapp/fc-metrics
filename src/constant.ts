import { RetrtyOptions } from './interface';

export const CONTEXT = 'FC-METRICS';
export const openBrowser = false;
export const apiNamespace = 'acs_fc';
export const requestOption = 'GET';
export const RETRYOPTIONS: RetrtyOptions = {
  retries: 5,
  factor: 2,
  minTimeout: 1 * 1000,
  randomize: true,
};
