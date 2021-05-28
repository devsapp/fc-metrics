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
  regionId: string;
  serviceName: string;
  functionName: string;
  constructor(properties: IProperties, credentials: ICredentials) {
    this.requestOption = requestOption;
    this.accountId = credentials.AccountID;
    this.accessKeyID = credentials.AccessKeyID;
    this.accessKeySecret = credentials.AccessKeySecret;
    this.regionId = properties.regionId;
    this.serviceName = properties.serviceName;
    this.functionName = properties.functionName;
    this.fcClient = getFcClient(credentials, properties.regionId);
    this.cmsClient = getCmsClient(credentials);
    this.buildSLSClient = getSLSClient(credentials, properties.regionId);
    this.getTraceClicnt = getTraceClicnt(credentials, properties.regionId);
  }

  async getService(tableParams) {
    const { serviceName, qualifier } = tableParams || {};
    try {
      this.logger.debug('this.fcClientparams', serviceName, qualifier);
      var service = await this.fcClient.getService(serviceName, {}, qualifier);
      this.logger.debug('service', service);
      return service.data.logConfig
    } catch (e) {
      this.logger.debug("An error occured when get service")
      this.logger.debug('this.fcClientparams', serviceName, qualifier);
      // try again
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
      region: this.regionId,
      serviceName: this.serviceName,
      functionName: this.functionName,
    };
    const params = {
      Namespace: apiNamespace,
      RegionId: this.regionId,
      Period: period,
      StartTime: startTime,
      EndTime: endTime,
      MetricName: metric,
      Dimensions: JSON.stringify(dimension),
      qualifier,
    };

    this.logger.debug(`${metric} api params: ${JSON.stringify(params)}`);
    return await this.cmsClient.request('DescribeMetricList', params, { method: 'POST' }).then((result) => {
      return result.Datapoints && JSON.parse(result.Datapoints) || null;
    }).catch((e) => {
      this.logger.error(`/get/metric: ${this.functionName}下的${metric}获取metrics图表出错,${e}`);
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
     // console.log(JSON.stringify(result));
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
      regionId: this.regionId,
      startTime: `${startTime}`,
      endTime: `${endTime}`,
      serviceName: this.serviceName,
      functionName: this.functionName,
      qualifier,
    };

    return await this.describeFunctionInsights(tableListParams).then(function (data) {
      return data;
    }).catch(function (e) {
      console.log("An error occurred when describeFunctionInsights", e)
      return e;
    });
  }

  //获取request 信息
  async fetchRequestInfo(data) {
    const { startTime, endTime, qualifier, requestId } = data;
    const requestParams = {
      regionId: this.regionId,
      startTime: `${startTime}`,
      endTime: `${endTime}`,
      serviceName: this.serviceName,
      functionName: this.functionName,
      qualifier,
      requestId,
    };

    return await this.describeRequestInsights(requestParams).then(function (data) {
      return data;
    }).catch(function (e) {
      console.log("An error occurred when describeRequestInsights", e)
      return e;
    });
  }

  //获取请求详情日志
  // async fetchLogs(params) {
  //   const { startTime, endTime, qualifier, requestId } = params;
  //   const endpoint = this.regionId + ".log.aliyuncs.com";
  //   const request_id = requestId;
  //   const function_name = this.functionName;
  //   const start_time = Number(startTime) / 1000;
  //   const end_time = Number(endTime) / 1000;
  //   const log_config = get_logconfig(params);
  //   const logstore = log_config["logstore"];
  //   const project = log_config["project"];
  //   if (!logstore || !project) {
  //     const result = {
  //       "data": 'LogConfigNotSetException',
  //       "success": false,
  //       "errorMsg": 'LogConfigNotSetException' + ": Please set logConfig and try again",
  //       "errorStack": ""
  //     }
  //     return json.dumps(result)
  //   }
  //   const client = LogClient(endpoint, this.accessKeyID, this.accessKeySecret, "");
  // }

  // async get_logconfig(params) {
  //   if ("project" in params.keys() && "logstore" in params.keys()) {
  //     const project = params["project"];
  //     const logstore = params["logstore"];
  //     return {
  //       "project": project,
  //       "logstore": logstore
  //     }
  //   }

  //   const region_id = this.regionId;
  //   const endpoint = "https://{0}.{1}.fc.aliyuncs.com".format(this.accountId, region_id)
  //   const service_name = this.serviceName;
  //   let qualifier = "LATEST";
  //   if ("qualifier" in params.keys() && params["qualifier"] != "ALL") {
  //     qualifier = params["qualifier"];
  //   }
  //   const client = fc2.Client({
  //     endpoint,
  //     accessKeyID: this.accessKeyID,
  //     accessKeySecret: this.accessKeySecret,
  //   });
  //   const service = client.get_service({ serviceName: service_name, qualifier, })
  //   return service.data["logConfig"]
  // }

  async start() {
    const uri = path.join(__dirname, 'static')
    this.logger.debug(`uri path: ${JSON.stringify(uri)}`);
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
        that.logger.info('Get /get/version Request');
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
          that.logger.error(`/get/version: ${that.serviceName}获取服务版本出错`);
        }
      })

      app.get('/get/alias', async (req, res) => {
        that.logger.info('Get /get/alias Request')
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
          that.logger.error(`/get/alias: ${that.serviceName}获取服务别名出错`);
        }
      })

      app.get('/', (req, res) => {
        that.logger.info(`Get Express - ${req}`);
        res.header('Content-Type', 'text/html;charset=utf-8');
        res.sendFile(path.join(__dirname, '../../dist/static'));
      });
    }

    const server = new StartService({ callback, openBrowser });
    server.start();
  }
}

