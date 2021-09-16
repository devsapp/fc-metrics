import { HLogger, ILogger } from '@serverless-devs/core';
import { CONTEXT, requestOption, openBrowser, apiNamespace } from '../constant';
import { IProperties, ICredentials } from '../interface';
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';
import StartService from './services';
import { getCmsClient, getFcClient, getSLSClient, getTraceClicnt } from './client';

const isNcc = path.basename(__dirname) === 'dist';

export default class Metrics {
  @HLogger(CONTEXT) logger: ILogger;
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
  constructor(properties: IProperties, credentials: ICredentials) {
    this.requestOption = requestOption;
    this.accountId = credentials.AccountID;
    this.accessKeyID = credentials.AccessKeyID;
    this.accessKeySecret = credentials.AccessKeySecret;
    this.region = properties.region;
    this.serviceName = properties.serviceName;
    this.functionName = properties.functionName;
    this.credentials = credentials;
    this.cmsClient = getCmsClient(credentials);
    this.buildSLSClient = getSLSClient(credentials, properties.region);
    this.getTraceClicnt = getTraceClicnt(credentials, properties.region);
  }

  async getService(tableParams) {
    const { serviceName, qualifier } = tableParams || {};
    const fcClient = await getFcClient(this.credentials, this.region);
    try {
      this.logger.debug('Get: fcClient 入参', serviceName, qualifier);
      const service = await fcClient.getService(serviceName, {}, qualifier);
      return service.data.logConfig;
    } catch (e) {
      this.logger.debug('Fail: An error occured when get service', serviceName, qualifier);
      const service = await fcClient.getService(serviceName, {}, qualifier);
      return service.data.logConfig;
    }
  }

  async describeFunctionInsights(params) {
    const logConfig = await this.getService(params);
    if (!logConfig.enableRequestMetrics) {
      const errResp = {
        statusCode: '400',
        errorCode: 'RequestMetricsNotEnable',
        errorMessage: 'Please enable requestMetrics and try again.',
      };
      return errResp;
    }

    const client = this.buildSLSClient;

    const topic = `FCRequestMetrics:${ params.serviceName }/${ params.functionName}`;

    const opt: any = {
      projectName: logConfig.project,
      logStoreName: logConfig.logstore,
      topic,
      from: params.startTime.substr(0, params.startTime.length - 3),
      to: params.endTime.substr(0, params.endTime.length - 3),
      reverse: true,
    };

    if (params.qualifier) {
      opt.query = params.qualifier;
    }

    return new Promise((resolve, reject) => {
      client.getLogs(opt, (err, data) => {
        if (err) {
          reject(err);
        }
        if (data) {
          const logsCnt = data.headers['x-log-count'];
          const resp = [];
          for (let i = logsCnt - 1; i >= 0; i--) {
            resp.push(data.body[i]);
          }
          resolve(resp);
        } else {
          resolve([]);
        }
      });
    });
  }

  // 请求详情卡片数据
  async describeRequestInsights(params) {
    const logConfig = await this.getService(params);
    const client = this.buildSLSClient;
    const topic = `FCRequestMetrics:${ params.serviceName }/${ params.functionName}`;

    const opt = {
      projectName: logConfig.project,
      logStoreName: logConfig.logstore,
      topic,
      from: params.startTime.substr(0, params.startTime.length - 3),
      to: params.endTime.substr(0, params.endTime.length - 3),
      query: params.requestId,
    };

    return new Promise((resolve, reject) => {
      client.getLogs(opt, (err, data) => {
        if (err) {
          reject(err);
        }
        const logsCnt = data.headers['x-log-count'];
        const resp = [];

        for (let i = logsCnt - 1; i >= 0; i--) {
          resp.push(data.body[i]);
        }
        resolve(resp);
      });
    });
  }

  async fetchMetrics(data) {
    const { startTime, endTime, period, qualifier, metric } = data;
    const dimension = {
      userId: this.accountId,
      region: this.region,
      serviceName: this.serviceName,
      functionName: this.functionName,
    };
    const params = {
      Namespace: apiNamespace,
      RegionId: this.region,
      Period: period,
      StartTime: startTime,
      EndTime: endTime,
      MetricName: metric,
      Dimensions: JSON.stringify(dimension),
      qualifier,
    };

    return await this.cmsClient.request('DescribeMetricList', params, { method: 'POST' }).then((result) => {
      return (result.Datapoints && JSON.parse(result.Datapoints)) || null;
    }).catch((e) => {
      this.logger.debug(`Fail: 获取metrics,${metric}图表出错,Api params: ${JSON.stringify(params)},错误信息:${e}`);
    });
  }

  // 获取请求详情的调用链路
  async fetchTrace(data) {
    const { regionId, traceId } = data;
    const args = {
      RegionId: regionId,
      TraceID: traceId,
    };

    return await this.getTraceClicnt.request('GetTrace', args, {
      method: 'POST',
    }).then((result) => {
      const res = {
        data: result,
        success: true,
        errorMsg: '',
      };
      return res;
    }, (ex) => {
      const res = {
        data: ex,
        success: false,
        errorMsg: `${ex.name }: ${ ex.message}`,
        errorStack: ex.stack,
      };
      return res;
    });
  }


  // 获取函数列表
  async fetchTableList(data) {
    const { startTime, endTime, qualifier } = data;
    const tableListParams = {
      regionId: this.region,
      startTime: `${startTime}`,
      endTime: `${endTime}`,
      serviceName: this.serviceName,
      functionName: this.functionName,
      qualifier,
    };

    return await this.describeFunctionInsights(tableListParams).then((d) => d).catch((e) => {
      this.logger.error('Fail: An error occurred when describeFunctionInsights', e);
      return e;
    });
  }

  // 获取request 信息
  async fetchRequestInfo(data) {
    const { startTime, endTime, qualifier, requestId } = data;
    const requestParams = {
      regionId: this.region,
      startTime: `${startTime}`,
      endTime: `${endTime}`,
      serviceName: this.serviceName,
      functionName: this.functionName,
      qualifier,
      requestId,
    };

    return await this.describeRequestInsights(requestParams).then((d) => d).catch((e) => {
      this.logger.error('Fail: An error occurred when describeRequestInsights', e);
      return e;
    });
  }

  async start() {
    const uri = isNcc ? path.join(__dirname, 'utils', 'static') : path.join(__dirname, 'static');
    this.logger.debug(`Get File path: ${JSON.stringify(uri)}`);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that: any = this;
    function callback(app) {
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(express.static(path.join(uri)));
      // 设置跨域访问
      app.all('*', (_req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
        res.header('Content-Type', 'application/json');
        next();
      });

      app.post('/get/metric', async (req, res) => {
        req.headers['content-type'] = 'application/json';
        const params = req.body;
        try {
          const result = await that.fetchMetrics(params);
          const resp = {
            data: result || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message });
        }
      });

      app.post('/get/RequestTableList', async (req, res) => {
        req.headers['content-type'] = 'application/json';
        const params = req.body;
        try {
          const result = await that.fetchTableList(params);
          const resp = {
            data: result || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message });
        }
      });

      app.post('/get/RequestInfo', async (req, res) => {
        req.headers['content-type'] = 'application/json';
        const params = req.body;
        try {
          const result = await that.fetchRequestInfo(params);
          const resp = {
            data: result || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message });
        }
      });

      app.post('/get/Trace', async (req, res) => {
        req.headers['content-type'] = 'application/json';
        const params = req.body;
        try {
          const result = await that.fetchTrace(params);
          const resp = {
            data: result || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message });
        }
      });

      app.post('/get/Logs', async (req, res) => {
        req.headers['content-type'] = 'application/json';
        const params = req.body;
        try {
          const result = await that.fetchLogs(params);
          const resp = {
            data: result || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message });
        }
      });

      app.get('/get/version', async (_req, res) => {
        that.logger.debug('Get: /get/version Request start');
        try {
          const list = await that.fcClient.listVersions(that.serviceName);
          const resp = {
            data: list.data.versions || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message });
          that.logger.error(`Fail: /get/version: ${that.serviceName}获取服务版本出错`);
        }
      });

      app.get('/get/alias', async (_req, res) => {
        that.logger.debug('Get: /get/alias Request');
        try {
          const list = await that.fcClient.listAliases(that.serviceName);
          const resp = {
            data: list.data.aliases || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message });
          that.logger.error(`Fail: /get/alias: ${that.serviceName}获取服务别名出错`);
        }
      });

      app.get('/', (_req, res) => {
        res.header('Content-Type', 'text/html;charset=utf-8');
        // 按照之前的逻辑，并没有找到相关的路径，求解
        let filePath = path.join(__dirname, '..', 'static');
        if (isNcc) {
          filePath = path.join(__dirname, 'static');
        }
        res.sendFile(filePath);
      });
    }

    const server = new StartService({ callback, openBrowser });
    server.start();
  }
}

