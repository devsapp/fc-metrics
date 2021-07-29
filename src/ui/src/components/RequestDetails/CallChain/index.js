// eslint react/prefer-stateless-function: "off"
import React, { Component, Fragment } from 'react';
import { Loading, Balloon, Button } from '@alicloud/console-components';
import TreeGrid from '../utils/TreeGrid';
import * as dc from '../utils/dataConvert';
import { intl } from '../../../utils/handlerChartData';

export class Detail extends Component {
  goto(item, ServiceName) {
    const requestInfoStr = sessionStorage.getItem('requestInfo');
    const requestObj = requestInfoStr && JSON.parse(requestInfoStr);
    const {
      regionId,
      startTime,
      endTime,
      qualifier } = requestObj

    let chatServiceName = '';
    if (ServiceName) {
      const idx = ServiceName.indexOf(":");
      chatServiceName = ServiceName.substring(idx + 1);
    }
    const splitStr = chatServiceName && chatServiceName.split('/');
    const serviceName = splitStr[0] || '';
    const functionName = splitStr[1] || '';
    const value = item.Value || '';
    var path = {
      pathname: `/details`,
      search: `?requestId=${value}&startTime=${startTime}&endTime=${endTime}&qualifier=${qualifier}`
    }

    return (
      <a href={path.pathname} target="_blank" >  {value}</a>
    )
  }

  getTagMap(data, ServiceName) {
    return (
      <div style={{ margin: '0 30px' }}>
        <table className="mini-table">
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td style={{ width: 120 }}>{item.Key}</td>
                <td style={{ wordBreak: 'break-word' }}>
                  {item.Key === 'x-fc-request-id' && item.Value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  getLogMap(data) {
    const keys = Object.keys(data).sort((a, b) => {
      return a - b;
    });
    return (
      <Fragment>
        {keys.map((key, i) => {
          let item = data[key];
          let t = parseInt(key.substr(0, 13));
          return (
            <div key={i} style={{ margin: '0 30px' }}>
              <p>{dc.dateFormat(data.Timestamp || t, 'YYYY-MM-DD HH:mm:s.SSS')}</p>
              <table className="mini-table">
                <tbody>
                  {Object.keys(item).map((key2, j) => (
                    <tr key={j}>
                      <td style={{ width: 120 }}>{key2}</td>
                      <td style={{ wordBreak: 'break-word' }}>{item[key2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </Fragment>
    );
  }

  render() {
    let { data = {} } = this.props;
    return (
      <div className="style-scroll" style={{ minWidth: 400, maxHeight: 400, overflowY: 'auto' }}>
        <div>
          <span style={{ fontSize: '16px' }}>{data.OperationName}</span>
          <p>
            <span>
              Service: <strong>{data.ServiceName}</strong>
            </span>
            <span style={{ margin: '0 6px' }}>
              Duration: <strong>{data.Duration}</strong>
            </span>
            <span>
              Start Time: <strong>{dc.dateFormat(data.Timestamp)}</strong>
            </span>
          </p>
        </div>
        <div>
          <p>Tags:</p>
          {data.TagEntryList && this.getTagMap(data.TagEntryList && data.TagEntryList.TagEntry, data.ServiceName)}
        </div>
        <div>
          <p>Log Events:</p>
          {data.logMap && this.getLogMap(data.logMap)}
        </div>
      </div>
    );
  }
}

const expandOn = {
  field: 'rpc',
  displayName: intl('fc.dashboard.requset.span'),

  style: { width: 500 },
  render(row) {
    return (
      <div className="inner" style={{ whiteSpace: 'normal', wordBreak: 'break-all' }}>
        <Balloon
          triggerType="hover"
          trigger={<span className="hover-span">{row.OperationName}</span>}
          align="rb"
          closable={false}
          popupStyle={{ padding: 10, maxWidth: 420 }}
        >
          <Detail
            data={row}
          />
        </Balloon>
      </div>
    );
  },
};

//调用树列定义
const columns = [
  {
    field: 'span',
    displayName: intl('fc.dashboard.requset.timeaxios'),
    style: { width: '500px', borderTop: 'none', borderBottom: 'none' },
    render(row) {
      //需要根据数据计算后重写
    },
  },

  {
    field: 'ServiceName',
    displayName: intl('fc.dashboard.requset.application'),

    style: { width: '200px', position: 'relative' },
    render(row) {
      return <div className="inner">{row.ServiceName}</div>;
    },
  },

  {
    field: 'Timestamp',
    displayName: intl('fc.dashboard.requset.logAppearTimes'),

    style: { width: '150px' },
    render(row) {
      return <div className="inner">{dc.dateFormat(row.Timestamp)}</div>;
    },
  },

  {
    field: 'ServiceIp',
    displayName: intl('fc.dashboard.requset.ipAddress'),

    style: { width: '90px' },
    render(row) {
      return <div className="inner">{row.ServiceIp}</div>;
    },
  },

  {
    field: 'ResultCode',
    displayName: intl('fc.dashboard.requset.status'),

    style: { width: '54px' },
    render(row) {
      let className = 'trace-status ';
      switch (parseInt(row.ResultCode)) {
        case 0:
          className += 'ok';
          break;
        case 1:
          className += 'error';
          break;
        default:
          className += 'warning';
      }

      return (
        <div style={{ textAlign: 'center' }}>
          <i className={className} />
        </div>
      );
    },
  },
];

function logTimeCreater(min, max, duration) {
  const len = max - min;
  return function (row) {
    let left = 0,
      width = '100%',
      backgroundColor = '#A7D3FF',
      elapsedLeft = 'none',
      elapsedRight = 0,
      marginLeft = 0,
      marginRight = 'none';
    if (!row._node) {
      left = ((row.Timestamp - min) * 100) / duration + '%';
      width = (row.Duration * 100) / duration + '%';
      backgroundColor = '#B8E986';
    } else {
      left = ((row.Timestamp - min) * 100) / duration + '%';
      width = (row.Duration * 100) / duration + '%';
      backgroundColor = '#A7D3FF';
    }
    if (((row.Timestamp - min) * 100) / duration > 80) {
      (elapsedRight = 100 - ((row.Timestamp - min) * 100) / duration + '%'), (marginRight = '4px');
    } else {
      elapsedLeft = left;
      marginLeft = '4px';
    }

    let Timestamp = (
      <div className="log-time-box">
        <div className="time-section" style={{ left, width, backgroundColor }}></div>
        <span
          className="elapsed"
          style={{
            right: elapsedRight,
            marginRight,
            left: elapsedLeft,
            marginLeft,
          }}
        >
          {(row.Timestamp + '').length === 13 ? row.Duration : row.Duration / 1000}
          ms
        </span>
      </div>
    );

    return (
      <div className="log-time">
        <Balloon trigger={Timestamp} align="r" closable={false}>
          <div className="text-left">
            {intl('fc.log.basic.invoke.time')}
            {dc.dateFormat(row.Timestamp, 'YYYY-MM-DD HH:mm:s.SSS')} <br />
            {intl('fc.dashboard.requset.wasteTimes')}
            {(row.Timestamp + '').length === 13 ? row.Duration : row.Duration / 1000}
            ms
          </div>
        </Balloon>
      </div>
    );
  };
}

class CallChain extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    loading: false,
    tree: [],
    headData: [],

  };

  componentDidMount() {
    this.getCallChain();
  }

  getCallChain() {
    const result = this.props.data.data;
    let time = result.Duration / 1000;

    let { tree, startTime, endTime } = dc.convertTree(result.children);
    columns[0].render = logTimeCreater(result.Timestamp, endTime, result.Duration);
    this.setState({ tree, loading: false });
  }

  render() {
    const { tree, loading } = this.state;
    console.log('tree',tree)
    return (
      <div className="next-table">
        {tree.length === 0 && !loading ? (
          <div className="call-chain-nodata">
            {intl('fc.applications.rds.import_tpye.import.rds.null')}
          </div>
        ) : (
          <div>
            <TreeGrid data={tree} expandOn={expandOn} columns={columns} />
          </div>
        )}
      </div>
    );
  }
}

export default CallChain;
