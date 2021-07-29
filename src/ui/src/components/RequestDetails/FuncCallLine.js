import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Table, Step, Balloon } from "@alicloud/console-components";
import { intl } from '../../utils/handlerChartData';
import style from './index.scoped.less';
import CallChain from './CallChain';

class FuncCallLine extends React.Component {

    render() {
        const { timeLineData, startTime, endTime, regionId, getDataFlag } = this.props;
        return (
            <div className={`functionCallWraper marginTop20 padding16 paddingTop0`}>
                <h2 className={`paddingTop10 color333`}>{intl('fc.dashboard.function.call.chain')}</h2>
                {
                    !getDataFlag && <Table
                        dataSource={[]}
                        hasBorder={false}
                    />
                }

                {
                    getDataFlag && <CallChain
                        data={timeLineData}
                        startTime={startTime}
                        endTime={endTime}
                        regionId={regionId}
                    />
                }

            </div>
        )
    }

}

FuncCallLine.propTypes = {
    timeLineData: PropTypes.array,
    expandRow: PropTypes.array,
    timeLineDataOriginData: PropTypes.object
}


export default FuncCallLine;



