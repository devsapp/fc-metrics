import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Grid } from "@alicloud/console-components";
import { intl } from '../../utils/handlerChartData';
import './index.scoped.less';


//获取每个card对应的title
function getCardArrInfo() {
    return [
        {
            title: `${intl('fc.dashboard.execution.status')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }, {
            title: `${intl('fc.dashboard.status.is.coldStart')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }, {
            title: `${intl('fc.dashboard.function.execution.time')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }, {
            title: `${intl('fc.dashboard.memory.consumption')}`,
            showTitleBullet: false,
            showHeadDivider: false,
        }]
}

//获取执行状态,hasFunctionError是false，标明成功. hasFunctionError是ture,标明失败
function getExecuStaus(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { hasFunctionError, errorType } = data;
        if (hasFunctionError === 'false') {
            return {
                code: 'SUCCESS',
                color: 'colorGreen'
            }
        } else {
            return {
                code: errorType || '',
                color: 'colorRed'
            }
        }
    }
    return '';
}

//获取是否冷启动,isColdStart是false，没有冷启动. isColdStart是ture,有冷启动
function hasColdStart(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { isColdStart } = data;
        if (isColdStart === 'false') {
            return intl('fc.dashboard.no')
        } else {
            return intl('fc.dashboard.yse');
        }
    }
    return '';
}


//获取函数执行时间和内存消耗
function getDuration(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { durationMs } = data;
        return durationMs ? `${durationMs} ms` : ''
    }
    return '';
}

//获取内存消耗
function getMemoryUsageMB(requestCardData) {
    if (Array.isArray(requestCardData) && requestCardData.length != 0) {
        const data = requestCardData[0] || {};
        const { memoryUsageMB } = data;
        return memoryUsageMB ? `${memoryUsageMB} MB` : ''
    }
    return '';
}


export default function CardInfo(props) {
    const { requestCardData } = props;
    const { Row, Col } = Grid;
    const commonPropsArr = getCardArrInfo();
    const execuStatus = getExecuStaus(requestCardData) || {};
    return (
        <div className='cardInfoWraper'>
            <h1 className='color333'>{intl('fc.dashboard.request.detail')}</h1>
            <Row>
                <Col key={0} >
                    <Card {...commonPropsArr[0]} contentHeight="auto" className={`marginRight20 height100 ${execuStatus.color}`}>
                        <div className={`customContent`}>
                            <div className={'colorfff'}>{execuStatus.code}</div>
                        </div>
                    </Card>
                </Col>

                <Col key={1} >
                    <Card {...commonPropsArr[1]} contentHeight="auto" className={`marginRight20 height100`}>
                        <div className={`customContent`}>
                            {hasColdStart(requestCardData)}
                        </div>
                    </Card>
                </Col>

                <Col key={2} >
                    <Card {...commonPropsArr[2]} contentHeight="auto" className={`marginRight20 height100`}>
                        <div className={`customContent`}>
                            {getDuration(requestCardData)}
                        </div>
                    </Card>
                </Col>

                <Col key={3} >
                    <Card {...commonPropsArr[3]} contentHeight="auto" className={`height100`}>
                        <div className={`customContent`}>
                            {getMemoryUsageMB(requestCardData)}
                        </div>
                    </Card>
                </Col>

            </Row>
        </div>

    )
}


CardInfo.propTypes = {
    requestCardData: PropTypes.array,
}


