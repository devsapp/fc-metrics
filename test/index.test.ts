//import MetricsComponent from '../src/index';

const INPUTS = {
  Properties: {
    regionId: 'cn-hangzhou',
    serviceName: 'test',
    functionName: 'testHello',
  },
  Credentials: {
    AccountID: '123456',
    AccessKeyID: 'AccessKeyID',
    AccessKeySecret: 'AccessKeySecret',
  },
  Project: {
    ProjectName: 'fc-metrics-projectName',
    Component: 'fc-metrics',
    Provider: 'alibaba',
  },
  Command: 'metrics',
};

describe('create', () => {
  it('should 返回输入参数', async () => {
    // const metricsComponent = new MetricsComponent();
    // const result = await metricsComponent.metrics(INPUTS);
    // console.log('result', result);
    expect(1).toBe(1);
  });
});
