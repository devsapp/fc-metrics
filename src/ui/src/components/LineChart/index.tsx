import React, { useState, useEffect, Fragment, useContext } from 'react';
import { isEmpty } from 'lodash';
import { Grid, Card } from '@alicloud/console-components';
// import {
//   FunctionTotalInvocations,
//   FunctionProvisionInvocations,
//   FunctionServerErrors,
//   FunctionClientErrors,
// } from '../../constants';
import intl from '@ali/wind-intl';
import { UserContext } from '../../context';
import LineChart from './Chart/index';
import { ISFUNCMETRICSACTIVE, isEnLanguage, SIZEROW1, SIZEROW2, WIDTH95, WIDTH164, WIDTH144, WIDTH200, WIDTH210, WIDTH100 } from './Chart/helper';
import { getMetricData } from '../../request';
import './index.css';

const { Row, Col } = Grid;

export default () => {
  const functionCallsNameList = [
    { metricName: 'FunctionQualifierTotalInvocations', legendName: intl('fc.dashboard.allCount.lable'), colorPrimary: '#0881FE' },
    { metricName: 'FunctionQualifierProvisionInvocations', legendName: intl('fc.dashboard.singletonCount.lable'), colorPrimary: 'rgb(90 216 166)' },
  ];

  const functionErrorNameList = [
    { metricName: 'FunctionQualifierServerErrors', legendName: intl('fc.metrics.legend.service_errors'), colorPrimary: '#751616' },
    { metricName: 'FunctionQualifierClientErrors', legendName: intl('fc.metrics.legend.client_errors'), colorPrimary: '#E44F2F' },
    { metricName: 'FunctionQualifierFunctionErrors', legendName: intl('fc.metrics.legend.function_errors'), colorPrimary: '#E44390' },
  ];

  const flowControlNameLIst = [
    { metricName: 'FunctionQualifierConcurrencyThrottles', legendName: intl('fc.dashboard.traffic.control.concurrent.label'), colorPrimary: '#826AF9' },
    { metricName: 'FunctionQualifierResourceThrottles', legendName: intl('fc.dashboard.traffic.control.total.label'), colorPrimary: '#0881FE' },
  ];

  const timeDuationNameLIst = [
    { metricName: 'FunctionQualifierAvgDuration', legendName: intl('fc.dashboard.functionAvgDuration.lable'), colorPrimary: '#0881FE' },
    { metricName: 'FunctionQualifierMaxDuration', legendName: intl('fc.dashboard.functionMaxDuration.lable'), colorPrimary: '#FF7E4F' },
  ];

  const n2nDuationNameLIst = [
    { metricName: 'FunctionQualifierLatencyAvg', legendName: intl('fc.dashboard.functionLatencyAvg.lable'), colorPrimary: '#0881FE' },
    { metricName: 'FunctionQualifierLatencyMax', legendName: intl('fc.dashboard.functionLatencyMax.lable'), colorPrimary: '#FF7E4F' },
  ];

  const memoryUsageNameList = [
    { metricName: 'FunctionQualifierMaxMemoryUsage', legendName: intl('fc.dashboard.function.memory.max.label'), colorPrimary: '#FF7E4F' },
  ];

  //函数按量实例数(个)
  const funcOndemandNameList = [
    { metricName: 'FunctionQualifierOndemandInstanceQuota', legendName: intl('fc.dashboard.function.functionProvisionedInstanceCountLimit'), colorPrimary: '#FF7E4F', },
    { metricName: 'FunctionQualifierOndemandActiveInstance', legendName: intl('fc.dashboard.function.functionProvisionedInstanceCountCurrent'), colorPrimary: '#2BABA8', },
  ];

  //函数预留实例数(个)
  const funcProvisionedNameList = [
    { metricName: 'FunctionQualifierProvisionedCurrentInstance', legendName: intl('fc.dashboard.function.functionProvisionedCurrentInstanceCount'), colorPrimary: '#2BABA8', },
  ];
  //区域按量实例数(个)
  const reginConcurrencyNameList = [
    { metricName: 'RegionConcurrencyLimit', legendName: intl('fc.dashboard.function.regionProvisionedInstanceCountLimit'), colorPrimary: '#FF7E4F', },
    { metricName: 'RegionConcurrentCount', legendName: intl('fc.dashboard.function.regionProvisionedInstanceCountCurrent'), colorPrimary: '#2BABA8', },
  ];
  const functionCostNameList = [
    { metricName: 'FunctionQualifierCost', legendName: intl('fc.dashboard.function.functionUseageInfo'), colorPrimary: '#0881FE' },
  ];

  const destinationNameList = [
    { metricName: 'FunctionQualifierAsyncEventExpiredDropped', legendName: intl('fc.dashboard.destination.asyncEventExpiredDropped.label'), colorPrimary: '#E44390' },
    { metricName: 'FunctionQualifierDestinationErrors', legendName: intl('fc.dashboard.destination.error.label'), colorPrimary: '#E44F2F' },
    { metricName: 'FunctionQualifierDestinationSucceeded', legendName: intl('fc.dashboard.function.destination.succeed.label'), colorPrimary: 'rgb(90 216 166)' },
  ];

  const { config } = useContext(UserContext);
  const [functionCallMetricLoading, setFunctionCallMetricLoading] = useState(false);
  const [functionErrorsLoading, setFunctionErrorsLoading] = useState(false);
  const [flowControlMetricsLoading, setFlowControlMetricsLoading] = useState(false);
  const [timeDurationMetricsLoading, setTimeDurationMetricsLoading] = useState(false);
  const [n2nDuationMetricsLoading, setN2nDuationMetricsLoading] = useState(false);
  const [memoryMetricsLoading, setMemoryMetricsLoading] = useState(false);
  const [funcOndemandMetricsLoading, setFuncOndemandMetricsLoading] = useState(false);
  const [funcProvisionedMetricsLoading, setFuncProvisionedMetricsLoading] = useState(false);
  const [functionCostMetricsLoading, setFunctionCostMetricsLoading] = useState(false);
  const [destinationMetricsLoading, setDestinationMetricsLoading] = useState(false);
  const [reginConcurrencMetricsLoading, setReginConcurrencMetricsLoading] = useState(false);


  const [functionCallsMetrics, setFunctionCallsMetrics] = useState([]);
  const [functionErrors, setFunctionErrors] = useState([]);
  const [flowControlMetrics, setFlowControlMetrics] = useState([]);
  const [timeDurationMetrics, setTimeDurationMetrics] = useState([]);
  const [n2nDurationMetrics, setN2nDurationMetrics] = useState([]);

  const [memoryMetrics, setMemoryMetrics] = useState([]);
  const [funcOndemandMetrics, setFuncOndemandMetrics] = useState([]);
  const [funcProvisionedMetrics, setFuncProvisionedMetrics] = useState([]);
  const [regionConcurrencMetrics, setRegionConcurrencMetrics] = useState([]);
  const [functionCostMetrics, setFunctionCostMetrics] = useState([]);
  const [destinationMetrics, setDestinationMetrics] = useState([]);


  async function getData() {
    // 调用总数
    const functionQualifierTotalInvocationsData = await getMetricData({ ...config, metric: 'FunctionQualifierTotalInvocations' });
    const functionQualifierProvisionInvocationsData = await getMetricData({ ...config, metric: 'FunctionQualifierProvisionInvocations' });
    setFunctionCallMetricLoading(false);
    const functionCallsMetrics = [...functionQualifierTotalInvocationsData, ...functionQualifierProvisionInvocationsData];
    console.log('functionTotalInvocationsApiData', functionCallsMetrics);
    setFunctionCallsMetrics(functionCallsMetrics);
    // 错误次数
    const functionQualifierServerErrorsData = await getMetricData({ ...config, metric: 'FunctionQualifierServerErrors' });
    const FunctionQualifierClientErrorsData = await getMetricData({ ...config, metric: 'FunctionQualifierClientErrors' });
    const FunctionQualifierFunctionErrorsData = await getMetricData({ ...config, metric: 'FunctionQualifierFunctionErrors' });
    const functionErrors = [...functionQualifierServerErrorsData, ...FunctionQualifierClientErrorsData, ...FunctionQualifierFunctionErrorsData];
    setFunctionErrorsLoading(false);
    setFunctionErrors(functionErrors);
    // 并发实例
    const functionConcurrencyThrottleData = await getMetricData({ ...config, metric: 'FunctionQualifierConcurrencyThrottles' });
    const functionResourceThrottlesData = await getMetricData({ ...config, metric: 'FunctionQualifierResourceThrottles' });
    const flowControlMetrics = [...functionConcurrencyThrottleData, ...functionResourceThrottlesData];
    setFlowControlMetricsLoading(false);
    setFlowControlMetrics(flowControlMetrics);
    // 时间
    const functionAvgDurationData = await getMetricData({ ...config, metric: 'FunctionQualifierAvgDuration' });
    const functionMaxDurationData = await getMetricData({ ...config, metric: 'FunctionQualifierMaxDuration' });
    const timeDurationMetrics = [...functionAvgDurationData, ...functionMaxDurationData];
    setTimeDurationMetricsLoading(false);
    setTimeDurationMetrics(timeDurationMetrics);
    // 端到端时间
    const functionAvgLatencyAvgData = await getMetricData({ ...config, metric: 'FunctionQualifierLatencyAvg' });
    const functionLatencyMaxData = await getMetricData({ ...config, metric: 'FunctionQualifierLatencyMax' });
    const n2nDurationMetrics = [...functionAvgLatencyAvgData, ...functionLatencyMaxData];
    setN2nDuationMetricsLoading(false);
    setN2nDurationMetrics(n2nDurationMetrics);
    // 内存
    const memoryMetrics = await getMetricData({ ...config, metric: 'FunctionQualifierMaxMemoryUsage' });
    setMemoryMetricsLoading(false);
    setMemoryMetrics(memoryMetrics);
    // 预留实例
    const functionConcurrencyLimitData = await getMetricData({ ...config, metric: 'FunctionQualifierOndemandInstanceQuota' });
    const functionQualifierOndemandActiveInstanceData = await getMetricData({ ...config, metric: 'FunctionQualifierOndemandActiveInstance' });
    const funcOndemandMetrics = [...functionConcurrencyLimitData, ...functionQualifierOndemandActiveInstanceData];
    setFuncOndemandMetricsLoading(false);
    setFuncOndemandMetrics(funcOndemandMetrics);
    // 计算实例
    const functionQualifierProvisionedCurrentInstanceData = await getMetricData({ ...config, metric: 'FunctionQualifierProvisionedCurrentInstance' });
    const funcProvisionedMetrics = [...functionQualifierProvisionedCurrentInstanceData];
    setFuncProvisionedMetricsLoading(false);
    setFuncProvisionedMetrics(funcProvisionedMetrics);

    // region
    const regionConcurrencyLimitData = await getMetricData({ ...config, metric: 'RegionConcurrencyLimit' });
    const regionConcurrentCountData = await getMetricData({ ...config, metric: 'RegionConcurrentCount' });
    const regionConcurrencMetrics = [...regionConcurrencyLimitData, ...regionConcurrentCountData];
    setReginConcurrencMetricsLoading(false);
    setRegionConcurrencMetrics(regionConcurrencMetrics);
    
    // 资源利用率
    const functionQualifierCostData = await getMetricData({ ...config, metric: 'FunctionQualifierCost' });
    setFunctionCostMetricsLoading(false);
    setFunctionCostMetrics(functionQualifierCostData);
    // 并发执行
    const functionQualifierAsyncEventExpiredDroppedData = await getMetricData({ ...config, metric: 'FunctionQualifierAsyncEventExpiredDropped' });
    const functionQualifierDestinationErrorsData = await getMetricData({ ...config, metric: 'FunctionQualifierDestinationErrors' });
    const functionQualifierDestinationSucceededData = await getMetricData({ ...config, metric: 'FunctionQualifierDestinationSucceeded' });
    const destinationMetrics = [...functionQualifierAsyncEventExpiredDroppedData, ...functionQualifierDestinationErrorsData, ...functionQualifierDestinationSucceededData];
    setDestinationMetricsLoading(false);
    setDestinationMetrics(destinationMetrics);
  }

  useEffect(() => {
    if (!isEmpty(config)) {
      setFunctionCallMetricLoading(true);
      setFunctionErrorsLoading(true);
      setFlowControlMetricsLoading(true);
      setTimeDurationMetricsLoading(true);
      setN2nDuationMetricsLoading(true);
      setMemoryMetricsLoading(true);
      setFuncOndemandMetricsLoading(true);
      setFuncProvisionedMetricsLoading(true);
      setFunctionCostMetricsLoading(true);
      setDestinationMetricsLoading(true);
      setReginConcurrencMetricsLoading(true);
      getData();
    }
  }, [config]);

  const loadingList = [
    functionCallMetricLoading,
    functionErrorsLoading,
    flowControlMetricsLoading,
    timeDurationMetricsLoading,
    n2nDuationMetricsLoading,
    memoryMetricsLoading,
    funcOndemandMetricsLoading,
    funcProvisionedMetricsLoading,
    functionCostMetricsLoading,
    destinationMetricsLoading,
    reginConcurrencMetricsLoading,
  ];

  const metricsVisible = loadingList.includes(true);
  // 只有所有图表的loading是false的情况下，在展示图表数据，其他情况下，不进行图表的渲染来提高性能
  const getChartData = (chartData, loadingFlag) => {
    return (!loadingFlag && chartData) || [];
  };

  return (
    <Fragment>
      <Row className="marginBottom20">
        <Col span={8} style={{ paddingRight: '15px' }}>
          <Card contentHeight="auto">
            <LineChart
              visible={metricsVisible}
              title={intl('fc.dashboard.functionCallCount.lable')}
              data={getChartData(functionCallsMetrics, metricsVisible)}
              params={config || {}}
              legendList={functionCallsNameList}
              isActive={ISFUNCMETRICSACTIVE}
              sizePerRow={SIZEROW1}
              maxWidth={isEnLanguage() ? WIDTH164 : WIDTH144}
            />
          </Card>
        </Col>

        <Col span={8} style={{ paddingRight: '15px' }}>
          <Card contentHeight="auto">
            <LineChart
              visible={metricsVisible}
              title={intl('fc.dashboard.functionErrocCount.lable')}
              data={getChartData(functionErrors, metricsVisible)}
              params={config || {}}
              legendList={functionErrorNameList}
              isActive={ISFUNCMETRICSACTIVE}
              sizePerRow={SIZEROW2}
              maxWidth={WIDTH210}
            />
          </Card>
        </Col>

        <Col span={8} style={{ paddingRight: '15px' }}>
          <Card contentHeight="auto">
            <LineChart
              visible={metricsVisible}
              title={intl('fc.dashboard.flowControlCount.lable')}
              data={getChartData(flowControlMetrics, metricsVisible)}
              params={config || {}}
              legendList={flowControlNameLIst}
              isActive={ISFUNCMETRICSACTIVE}
              sizePerRow={SIZEROW1}
              maxWidth={isEnLanguage() ? WIDTH164 : WIDTH144}
            />
          </Card>
        </Col>
      </Row>

      <Row className="marginBottom20">
        <Col span={8} style={{ paddingRight: '15px' }}>
          <Card contentHeight="auto">
            <LineChart
              visible={metricsVisible}
              title={`${intl('fc.dashboard.function.execution.time')}(ms)`}
              data={getChartData(timeDurationMetrics, metricsVisible)}
              params={config || {}}
              legendList={timeDuationNameLIst}
              isActive={ISFUNCMETRICSACTIVE}
              sizePerRow={SIZEROW1}
              maxWidth={WIDTH95}
            />
          </Card>
        </Col>

        <Col span={8} style={{ paddingRight: '15px' }}>
          <Card contentHeight="auto">
            <LineChart
              visible={metricsVisible}
              title={intl('fc.dashboard.n2nduction.lable')}
              data={getChartData(n2nDurationMetrics, metricsVisible)}
              params={config || {}}
              legendList={n2nDuationNameLIst}
              isActive={ISFUNCMETRICSACTIVE}
              sizePerRow={SIZEROW1}
              maxWidth={WIDTH95}
            />
          </Card>
        </Col>

        <Col span={8} style={{ paddingRight: '15px' }}>
          <Card contentHeight="auto">
            <LineChart
              visible={metricsVisible}
              title={`${intl('fc.dashboard.function.memory.title')}(MB)`}
              data={getChartData(memoryMetrics, metricsVisible)}
              params={config || {}}
              legendList={memoryUsageNameList}
              isActive={ISFUNCMETRICSACTIVE}
              sizePerRow={SIZEROW1}
              maxWidth={WIDTH95}
            />
          </Card>
        </Col>
      </Row>



      <Row style={{ marginBottom: 20 }} gutter={20}>
          <Col span={8}>
            <Card contentHeight="auto">
              <LineChart
                visible={metricsVisible}
                title={intl('fc.dashboard.function.functionOndemandInstance')}
                data={getChartData(funcOndemandMetrics, metricsVisible)}
                params={config || {}}
                legendList={funcOndemandNameList}
                isActive={ISFUNCMETRICSACTIVE}
                sizePerRow={SIZEROW1}
                maxWidth={isEnLanguage() ? WIDTH95 : WIDTH164}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card contentHeight="auto">
              <LineChart
                visible={metricsVisible}
                title={intl('fc.dashboard.function.functionProvisionedInstanceCount')}
                data={getChartData(funcProvisionedMetrics, metricsVisible)}
                params={config || {}}
                legendList={funcProvisionedNameList}
                isActive={ISFUNCMETRICSACTIVE}
                sizePerRow={SIZEROW1}
                maxWidth={isEnLanguage() ? WIDTH95 : WIDTH144}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card contentHeight="auto">
              <LineChart
                visible={metricsVisible}
                title={intl('fc.dashboard.function.regionOndemandInstance')}
                data={getChartData(regionConcurrencMetrics, metricsVisible)}
                params={config || {}}
                legendList={reginConcurrencyNameList}
                isActive={ISFUNCMETRICSACTIVE}
                sizePerRow={SIZEROW1}
                maxWidth={isEnLanguage() ? WIDTH95 : WIDTH164}
              />
            </Card>
          </Col>
        </Row>

      <Row style={{ marginBottom: 20 }} gutter={20}>
          <Col span={8}>
            <Card contentHeight="auto">
              <LineChart
                visible={metricsVisible}
                title={intl('fc.dashboard.function.functionUsage')}
                data={getChartData(functionCostMetrics, metricsVisible)}
                params={config || {}}
                legendList={functionCostNameList}
                isActive={ISFUNCMETRICSACTIVE}
                sizePerRow={SIZEROW1}
                maxWidth={WIDTH100}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card contentHeight="auto">
              <LineChart
                visible={metricsVisible}
                title={intl('fc.dashboard.function.asyncEvent.label')}
                data={getChartData(destinationMetrics, metricsVisible)}
                params={config || {}}
                legendList={destinationNameList}
                isActive={ISFUNCMETRICSACTIVE}
                sizePerRow={SIZEROW2}
                maxWidth={WIDTH200}
              />
            </Card>
          </Col>
        </Row>

    </Fragment>
  );
};
