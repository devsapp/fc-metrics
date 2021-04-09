import { HLogger, ILogger } from '@serverless-devs/core';
import { CONTEXT, requestOption, openBrowser, apiNamespace } from '../constant';
import { IProperties, ICredentials } from '../interface';
import path from 'path';
import express from 'express';
import StartService from './services';
import { getCmsClient, getFcClient } from './client';

const bodyParser = require('body-parser');

export default class Metrics {
  @HLogger(CONTEXT) logger: ILogger;
  logClient: any;
  fcClient: any;
  cmsClient: any;
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
    this.cmsClient = getCmsClient(credentials, properties.regionId);
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

  async start() {
    const uri = path.join(__dirname, 'static')
    this.logger.info(`uri params:: ${JSON.stringify(uri)}`);
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

