import React, { useState, useEffect, useContext } from 'react';
import { Icon, Grid, Table } from '@alicloud/console-components';
import { Link } from 'react-router-dom';
import { intl } from '../../utils/handlerChartData';
import { isEmpty } from 'lodash';
import { UserContext } from '../../context';
import { getRequestTableList } from '../../request';
import { momentFormat, TableColStyle } from '../LineChart/Chart/helper';
import './index.css';

const { Row, Col } = Grid;
const { Column } = Table;

export default () => {
    const { config } = useContext(UserContext);
    const [tableList, setTableList] = useState([]);
    const [tablelistLoading, setTablelistLoading] = useState(false);
    const [isShowLogArea, setShowLogArea] = useState(false);
    useEffect(() => {
        if (!isEmpty(config)) {
            setTablelistLoading(true);
            getTableList();
        }
    }, [config]);

    async function getTableList() {
        const res = await getRequestTableList({ ...config });
        setTablelistLoading(false);
        setTableList(res.tableData);
        if (res.RequestMetricsNotEnable) {
            setShowLogArea(true)
        }
        console.log('tableData', res);
    };

    //获取table列中,函数执行的状态图标
    function getIconInfo(value) {
        if (!value) {
            return (
                <span>
                    <Icon type="check" size="small" style={{ color: "#0BB27B" }} />
                    <label style={{ marginLeft: 8, verticalAlign: 'middle' }}>{intl('fc.dashboard.success')}</label>
                </span>
            )
        } else {
            return (
                <span>
                    <Icon type="warning" size="small" style={{ color: "#D93026" }} />
                    <label style={{ marginLeft: 8, verticalAlign: 'middle' }}>{value}</label>
                </span>
            )
        }
    }


    function getColumns() {
        const { endTime = 0, startTime = 0, qualifier = 'LATEST', recent = 'hour' } = { ...config };

        return [
            {
                key: 'requestId',
                title: intl('fc.dashboard.function.requestId'),
                dataIndex: 'requestId',
                cell: (value, index, record) => {
                    const selectValue = record.qualifier;
                    const data = {
                        startTime,
                        endTime,
                        qualifier,
                        recent,
                        selectValue,
                    }

                    var path = {
                        pathname: `/details`,
                        state: data,
                        search: `?requestId=${value}&startTime=${startTime}&endTime=${endTime}&recent=${recent}&qualifier=${qualifier}&selectValue=${selectValue}`
                    }
                    return <Link to={path}> {value} </Link>
                },
            },
            {
                key: '__time__',
                title: intl('fc.dashboard.function.time'),
                dataIndex: '__time__',
                cell: (value) => momentFormat(Number(value) * 1000),
            },
            {
                key: 'durationMs',
                title: `${intl('fc.dashboard.function.durationMs')}`,
                width: 200,
                dataIndex: 'durationMs',
                cell: (value, index, record) => {
                    const { contentWidth, contentWidthNumber } = record || {};
                    return TableColStyle(value, contentWidth, contentWidthNumber);
                },
            },
            {
                key: 'memoryUsageMB',
                title: `${intl('fc.dashboard.function.memoryUsageMB')}`,
                dataIndex: 'memoryUsageMB',
                width: 200,
                cell: (value, index, record) => {
                    const { contentMemoryWidth, contentMemoryWidthNumber } = record || {};
                    return TableColStyle(value, contentMemoryWidth, contentMemoryWidthNumber);
                },
            },
            {
                key: 'isColdStart',
                title: `${intl('fc.dashboard.function.isColdStart')}`,
                dataIndex: 'isColdStart',
                cell: (value) => (
                    <div>
                        {value === 'true' ? (
                            <div
                                style={{
                                    width: 60,
                                    textAlign: 'center',
                                    background: '#F5F5F5',
                                    borderRadius: 12,
                                    backgroundColor: '#F5F5F5',
                                }}
                            >
                                {intl('fc.dashboard.function.isColdStart.yes')}
                            </div>
                        ) : null}
                    </div>
                ),
            },
            {
                key: 'errorType',
                title: intl('fc.dashboard.execution.status'),
                dataIndex: 'errorType',
                cell: (value) => (
                    <div>
                        {getIconInfo(value)}
                    </div>
                ),
            },
        ];
    }

    const columns = getColumns();
    console.log('configisShowLogArea', config);
    return (
        <Row>
            <Col span={24}>
                {
                    isShowLogArea && (
                        <div className={'applyLogWraper'}>
                            <h2 style={{ paddingTop: '20px' }}>{'推荐您开通RequestMetrics以便查询函数级别指标'}</h2>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ paddingBottom: '20px', fontSize: '14px' }}>
                                    <a href='https://fc.console.aliyun.com/'> 去往FC控制台服务及函数下的服务配置进行开通，或者联系函数计算团队 </a>
                                </div>
                                <img width={'85%%'} style={{ margin: '0 auto' }} src="https://fc-dashboard.oss-cn-hangzhou.aliyuncs.com/images/icon/functionLog.png" />
                            </div>
                        </div>
                    )
                }

                {
                    !isShowLogArea && (<Table
                        dataSource={tableList}
                        hasBorder={false}
                        primaryKey="requestId"
                        loading={tablelistLoading}
                    >
                        {columns && columns.map((col, key) => <Column {...col} key={key} />)}
                    </Table>
                    )
                }

            </Col>
        </Row>
    );
};
