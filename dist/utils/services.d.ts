import { ILogger } from '@serverless-devs/core';
declare class StartService {
    /**
     *
     * @param {*} context
     * callback 必填，回掉函数
     * port 选填，端口号
     * openBrowser 选填，是否自动打开浏览器
     */
    logger: ILogger;
    context: any;
    counter: number;
    app: any;
    server: any;
    port: number;
    constructor(context: any);
    randomNum(): number;
    start(): void;
    listen(): Promise<void>;
    stop(): Promise<void>;
}
export default StartService;
