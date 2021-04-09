import React, { Fragment, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { DatePicker, Select, Message, Icon, Button } from '@alicloud/console-components';
import moment from 'moment';
import debounce from 'lodash/debounce';

import './index.css';

const { RangePicker } = DatePicker;
const defaultRecentList = [
  { label: '实时', value: 'hours' },
  { label: '24 小时', value: 'days' },
  { label: '1 周', value: 'weeks' },
  { label: '自定义', value: 'customize' },
];
const pecentPeriodObject = {
  hours: 60,
  days: 3600,
  weeks: 3600,
  getPeriod: (difference) => {
    if (difference <= 12) {
      return 60;
    }
    return 3600;
  },
};

let getTimeConfigFlag = false; // 是否获取数据
let timer;

interface forwardRef{
  getTimeConfig: () => void;
  ref: React.Ref<any>;
}
export default forwardRef((props: forwardRef, ref) => {
  const [recent, setRecent] = useState('hours');
  const [endTime, setEndValue] = useState(moment());
  const [startTime, setStartValue] = useState(moment().subtract(1, 'hours'));
  const [period, setPeriod] = useState(60);

  useEffect(() => {
    if (getTimeConfigFlag) {
      props.getTimeConfig();
      getTimeConfigFlag = false;
    }
    clearInterval(timer);
    if (recent === 'hours') {
      timer = setInterval(() => recentChange(recent), 30 * 1000);
    }
  }, [period, endTime, startTime, recent]);

  const onRangeOk = async (dateValues) => {
    const startTimeMonment: moment.Moment = moment(dateValues[0]);
    const endTimeMonment: moment.Moment = moment(dateValues[1]);
    const startTime: number = startTimeMonment.valueOf();
    const endTime: number = endTimeMonment.valueOf();
    const difference = moment.duration(endTime - startTime, 'ms').asHours();
    if (difference === 0) {
      return Message.warning('开始时间必须小于结束时间');
    }
    const period = pecentPeriodObject.getPeriod(difference);
    setRecent('customize');
    setStartValue(dateValues[0]);
    setEndValue(dateValues[1]);
    setPeriod(period);
    props.getTimeConfig();
  };
  const recentChange = (value) => {
    if (value === 'customize') {
      setRecent('customize');
      return;
    }
    getTimeConfigFlag = true;
    const endTime = moment();
    const period = pecentPeriodObject[value];
    const startTime = moment().subtract(1, value);
    setRecent(value);
    setEndValue(endTime);
    setStartValue(startTime);
    setPeriod(period);
  };
  const refreshTime = () => {
    getTimeConfigFlag = true;
    if (recent === 'customize') {
     return props.getTimeConfig();
    }
    recentChange(recent);
  };

  useImperativeHandle(ref, () => ({
    endTime: moment(endTime).valueOf(),
    startTime: moment(startTime).valueOf(),
    // endTime: 1602212937315,
    // startTime: 1602209337316,
    period,
  }));

  return (
    <Fragment>
      <RangePicker
        label="时间范围"
        value={[startTime, endTime]}
        onChange={(dateValues) => {
          if (dateValues[0]) {
            setStartValue(dateValues[0]);
            getTimeConfigFlag = false;
          }
          if (dateValues[1]) {
            setEndValue(dateValues[1]);
            getTimeConfigFlag = false;
          }
        }}
        onOk={onRangeOk}
        disabledDate={(date: any) => date.valueOf() > moment() || date.valueOf() < moment().subtract(1, 'months')}
        className="marginLeft"
        style={{ width: 465 }}
        format="YYYY年MM月DD日"
        showTime={{ format: 'HH:mm' }}
      />
      <Select
        label={recent !== 'customize' && '最近'}
        value={recent}
        dataSource={defaultRecentList}
        className="marginLeft"
        onChange={recentChange}
      />
      <Button
        onClick={debounce(refreshTime, 200)}
        className="marginLeft"
      ><Icon type="refresh" />
      </Button>
    </Fragment>
  );
});
