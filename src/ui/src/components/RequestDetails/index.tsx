import React, { useState, useEffect, useContext } from 'react';
import { Loading } from "@ali/wind";
import { isEmpty } from 'lodash';
import { UserContext } from '../../context';
import { getRequestInfo, getTraceData } from '../../request';
import CardInfo from './CardInfo';
import FuncCallLine from './FuncCallLine';
import { queryStringSearch, getTableData } from '../LineChart/Chart/helper';

export default () => {
    const { config } = useContext(UserContext);
    const [getDataFlag, getDataFlagUpdate] = useState(false);
    const [requestLoading, getRequestLoading] = useState(false);
    const [requestCardData, requestCardDataUpdate] = useState([]);
    const [timeLineData, timeLineDataUpdate] = useState({});
    const [timeLineDataLoading, setTimeLineDataLoading] = useState(false);
    useEffect(() => {
        if (!isEmpty(config)) {
            getRequestLoading(true);
            getRequestData();
        }
    }, [config]);

    async function getRequestData() {
        const searchParamsObj = queryStringSearch(location.search);
        const cardData = await getRequestInfo(searchParamsObj);
        const { traceContext } = cardData[0] || {};
        const traceId = traceContext && traceContext.split(':')[0] || '';
        if (traceId) {
            const traceParamsObj = searchParamsObj;
            traceParamsObj.traceId = traceId;
            getTrace(traceParamsObj);
        }
        requestCardDataUpdate(cardData);
        getRequestLoading(false);
        setTimeLineDataLoading(false);
        console.log('timeLineData', cardData);
    };

    async function getTrace(params) {
        setTimeLineDataLoading(true)
        //  const getRequestTimeLineData = staticMockdataNew;
        const getRequestTimeLineData = await getTraceData(params);;
        const { data } = getRequestTimeLineData || {};
        const dataSource = getTableData(data);
        setTimeLineDataLoading(false);
        timeLineDataUpdate(dataSource);
        if (dataSource && dataSource.data) {
            getDataFlagUpdate(true);
        }
        console.log('timeLineData', timeLineData);
    };

    const searchParamsObj = queryStringSearch(location.search);
    const { startTime, endTime, qualifier } = searchParamsObj;
    return (

        <div>
            <Loading
                visible={requestLoading}
                style={{ width: '100%', height: '400', padding: '10px' }}
            >
                <CardInfo
                    requestCardData={requestCardData}
                />

                <FuncCallLine
                    getDataFlag={getDataFlag}
                    timeLineDataLoading={timeLineDataLoading}
                    timeLineData={timeLineData}
                    startTime={startTime}
                    endTime={endTime}
                    qualifier={qualifier}
                    regionId={'cn-shanghai'}
                />


            </Loading>
        </div>
    );
};
