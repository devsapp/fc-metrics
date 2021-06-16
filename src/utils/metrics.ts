import { HLogger, ILogger } from '@serverless-devs/core';
import { CONTEXT, requestOption, openBrowser, apiNamespace } from '../constant';
import { IProperties, ICredentials } from '../interface';
import path from 'path';
import express from 'express';
import StartService from './services';
import { getCmsClient, getFcClient, getSLSClient, getTraceClicnt } from './client';

const bodyParser = require('body-parser');

export default class Metrics {
  @HLogger(CONTEXT) logger: ILogger;
  logClient: any;
  fcClient: any;
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
  constructor(properties: IProperties, credentials: ICredentials) {
    this.requestOption = requestOption;
    this.accountId = credentials.AccountID;
    this.accessKeyID = credentials.AccessKeyID;
    this.accessKeySecret = credentials.AccessKeySecret;
    this.region = properties.region;
    this.serviceName = properties.serviceName;
    this.functionName = properties.functionName;
    this.fcClient = getFcClient(credentials, properties.region);
    this.cmsClient = getCmsClient(credentials);
    this.buildSLSClient = getSLSClient(credentials, properties.region);
    this.getTraceClicnt = getTraceClicnt(credentials, properties.region);
  }

  async getService(tableParams) {
    const { serviceName, qualifier } = tableParams || {};
    try {
      this.logger.debug('Get: fcClient 入参', serviceName, qualifier);
      var service = await this.fcClient.getService(serviceName, {}, qualifier);
      return service.data.logConfig
    } catch (e) {
      this.logger.debug("Fail: An error occured when get service", serviceName, qualifier)
      var service = await this.fcClient.getService(serviceName, {}, qualifier);
      return service.data.logConfig
    }
  }

  async describeFunctionInsights(params) {
    var logConfig = await this.getService(params);
    if (!logConfig["enableRequestMetrics"]) {
      var errResp = {
        "statusCode": "400",
        "errorCode": "RequestMetricsNotEnable",
        "errorMessage": "Please enable requestMetrics and try again."
      }
      return errResp
    }

    var client = this.buildSLSClient;

    var topic = "FCRequestMetrics:" + params["serviceName"] + "/" + params["functionName"]

    var opt = {
      "projectName": logConfig["project"],
      "logStoreName": logConfig["logstore"],
      "topic": topic,
      "from": params["startTime"].substr(0, params["startTime"].length - 3),
      "to": params["endTime"].substr(0, params["endTime"].length - 3),
      "reverse": true
    };

    if (params["qualifier"]) {
      opt["query"] = params["qualifier"]
    }

    return new Promise((resolve, reject) => {
      client.getLogs(opt, function (err, data) {
        if (err) {
          reject(err)
        }
        if (data) {
          var logsCnt = data["headers"]["x-log-count"]
          var resp = new Array()
          for (var i = logsCnt - 1; i >= 0; i--) {
            resp.push(data["body"][i])
          }
          resolve(resp)
        } else {
          resolve([]);
        }
      }
      )
    });

  }

  //请求详情卡片数据
  async describeRequestInsights(params) {
    var logConfig = await this.getService(params);
    var client = this.buildSLSClient;
    var topic = "FCRequestMetrics:" + params["serviceName"] + "/" + params["functionName"]

    var opt = {
      "projectName": logConfig["project"],
      "logStoreName": logConfig["logstore"],
      "topic": topic,
      "from": params["startTime"].substr(0, params["startTime"].length - 3),
      "to": params["endTime"].substr(0, params["endTime"].length - 3),
      "query": params["requestId"]
    };

    return new Promise((resolve, reject) => {
      client.getLogs(opt, function (err, data) {
        if (err) {
          reject(err)
        }
        var logsCnt = data["headers"]["x-log-count"]
        var resp = new Array()

        for (var i = logsCnt - 1; i >= 0; i--) {
          resp.push(data["body"][i])
        }
        resolve(resp)
      }
      )
    })
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
      return result.Datapoints && JSON.parse(result.Datapoints) || null;
    }).catch((e) => {
      this.logger.debug(`Fail: 获取metrics,${metric}图表出错,Api params: ${JSON.stringify(params)},错误信息:${e}`);
    });
  }

  //获取请求详情的调用链路
  async fetchTrace(data) {
    const { regionId, traceId } = data;
    const args = {
      "RegionId": regionId,
      "TraceID": traceId
    };
    const requestOption = {
      method: 'POST',
    };
    return await this.getTraceClicnt.request('GetTrace', args, requestOption).then((result) => {
      const res = {
        "data": result,
        "success": true,
        "errorMsg": ''
      }
      return res;
    }, (ex) => {
      const res = {
        "data": ex,
        "success": false,
        "errorMsg": ex.name + ': ' + ex.message,
        "errorStack": ex.stack
      }
      return res;
    })
  }



  //获取函数列表
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

    return await this.describeFunctionInsights(tableListParams).then(function (data) {
      return data;
    }).catch((e) => {
      this.logger.error(`Fail: An error occurred when describeFunctionInsights`, e);
      return e;
    });
  }

  //获取request 信息
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

    return await this.describeRequestInsights(requestParams).then(function (data) {
      return data;
    }).catch((e) => {
      this.logger.error(`Fail: An error occurred when describeRequestInsights`, e);
      return e;
    });
  }

  async start() {
    const uri = path.join(__dirname, 'static')
    this.logger.debug(`Get File path: ${JSON.stringify(uri)}`);
    const that: any = this;
    function callback(app) {
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(express.static(path.join(uri)))
      // 设置跨域访问
      app.all('*', (req, res, next) => {
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
          res.send({ success: false, error: true, message: e.message })
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
          res.send({ success: false, error: true, message: e.message })
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
          res.send({ success: false, error: true, message: e.message })
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
          res.send({ success: false, error: true, message: e.message })
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
          res.send({ success: false, error: true, message: e.message })
        }

      });

      app.get('/get/version', async (req, res) => {
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
          res.send({ success: false, error: true, message: e.message })
          that.logger.error(`Fail: /get/version: ${that.serviceName}获取服务版本出错`);
        }
      })

      app.get('/get/alias', async (req, res) => {
        that.logger.debug('Get: /get/alias Request')
        try {
          const list = await that.fcClient.listAliases(that.serviceName);
          const resp = {
            data: list.data.aliases || [],
            success: true,
            errorMsg: '',
          };
          res.send(resp);
        } catch (e) {
          res.send({ success: false, error: true, message: e.message })
          that.logger.error(`Fail: /get/alias: ${that.serviceName}获取服务别名出错`);
        }
      })

      app.get('/', (req, res) => {
        res.header('Content-Type', 'text/html;charset=utf-8');
        res.sendFile(path.join(__dirname, '../../dist/static'));
      });
    }

    const server = new StartService({ callback, openBrowser });
    server.start();
  }
}

