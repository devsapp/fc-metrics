import { HLogger, ILogger } from '@serverless-devs/core';
import { CONTEXT } from '../constant';

const express = require('express');
const { exec } = require('child_process');

class StartService {
  /**
   *
   * @param {*} context
   * callback 必填，回掉函数
   * port 选填，端口号
   * openBrowser 选填，是否自动打开浏览器
   */
  @HLogger(CONTEXT) logger: ILogger;
  context: any;
  counter: number;
  app: any;
  server: any;
  port: number;
  constructor(context) {
    this.context = context || {};
    this.app = express();
    this.counter = 0;
  }

  randomNum() {
    return 3000 + Math.round(Math.random() * 2000);
  }

  start() {
    this.port = this.context.port || 3000;
    this.context.callback(this.app);
    this.listen();
  }

  async listen() {
    this.counter += 1;
    this.server = this.app.listen(this.port, () => {
      const uri = `http://localhost:${this.port}`;

      this.logger.info(`Uri: ${uri}`);

      if (this.context.openBrowser) {
        switch (process.platform) {
          case "darwin":
            exec(`open ${uri}`);
            break;
          case "win32":
            exec(`start ${uri}`);
            break;
          case "linux":
            exec(`xdg-open ${uri}`);
          default:
            exec(`open ${uri}`)
        }
      }
    });

    this.server.on('error', (e) => {
      if (e.code === 'EADDRINUSE') {
        if (this.counter < 5) {
          this.port = this.randomNum();
          this.listen();
        } else {
          this.logger.error('接口错误', e);
        }
      }
    });
  }

  async stop() {
    this.server.close();
  }
}

export default StartService;
