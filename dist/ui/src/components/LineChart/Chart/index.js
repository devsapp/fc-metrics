"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const bizcharts_1 = require("bizcharts");
const lodash_1 = __importDefault(require("lodash"));
const wind_1 = require("@ali/wind");
const moment_1 = __importDefault(require("moment"));
const helper_1 = require("./helper");
const { Row, Col } = wind_1.Grid;
class LineChart extends react_1.Component {
    constructor(props) {
        super(props);
        // 对案列置灰和选中的时候，进行相应折线图展示的处理
        this.handleChangeToolTip = (legendMap) => {
            const { filter } = this.state;
            const cloneFilter = lodash_1.default.cloneDeep(filter);
            for (const key in legendMap) {
                const idx = cloneFilter.indexOf((key));
                if (key && legendMap[key]) {
                    idx != -1 && cloneFilter.splice(idx, 1);
                }
                else {
                    cloneFilter.push(key);
                }
            }
            this.setState({
                filter: [...new Set(cloneFilter)],
            });
        };
        // 对图例进行控制选中还是置灰处理
        this.onLengendChange = (value, legendMap) => {
            legendMap[value] = !legendMap[value];
            // 通过filter控制元素显示隐藏
            this.chartIns.filter('names', (val) => {
                return legendMap[val] !== false;
            });
            this.handleChangeToolTip(legendMap);
            // 重新渲染，触发filter
            this.chartIns.render(true);
        };
        // 如果data是空数组或者data不存在,不需要展示图列
        this.getLengendDom = () => {
            const { data, legendList, sizePerRow = 2, maxWidth } = this.props;
            const { legendMap } = this.state;
            if (!data || (Array.isArray(data) && data.length === 0)) {
                return null;
            }
            const rows = [];
            for (let i = 0; i < legendList.length; i++) {
                if (i % sizePerRow === 0) {
                    rows.push([legendList[i]]);
                }
                else {
                    rows[rows.length - 1].push(legendList[i]);
                }
            }
            return (react_1.default.createElement("div", { style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                } },
                react_1.default.createElement("div", { style: { width: maxWidth || sizePerRow * 100 } },
                    react_1.default.createElement("div", { style: { height: '40px' } }, rows.map((row, index) => (react_1.default.createElement(Row, { key: index }, row.map((item) => (react_1.default.createElement(Col, { key: item.legendName, onClick: () => { this.onLengendChange(item.legendName, legendMap); } },
                        react_1.default.createElement("span", { style: {
                                display: 'inline-block',
                                marginRight: 5,
                                width: 9,
                                height: 9,
                                background: legendMap[item.legendName] ? item.colorPrimary : '#ccc',
                            } }),
                        react_1.default.createElement("span", { className: "marginLeft5" }, item.legendName)))))))))));
        };
        this.state = {
            filter: [],
            legendMap: {},
        };
    }
    componentDidMount() {
        const { legendList } = this.props;
        const legendMap = {};
        (legendList || []).forEach((item) => {
            legendMap[item.legendName] = true;
        });
        this.setState({
            legendMap,
        });
    }
    // ToolTip联动，只对当前宽高一致的chart生效
    toolTipActive() {
        const { isActive } = this.props;
        const active = isActive ? 'someKey' : null;
        return (react_1.default.createElement(bizcharts_1.Tooltip, { shared: true, linkage: active }));
    }
    render() {
        const { title, data, visible } = this.props;
        const { filter } = this.state;
        const scale = {
            timestamp: {
                type: 'time',
                mask: 'YYYY-MM-DD HH:mm:ss',
                ticks: data[0] && [data[0].timestamp, data[data.length - 1].timestamp] || '0',
                range: [0, 0.90],
            },
            value: {
                type: 'linear',
                min: 0,
                tickCount: 4,
            },
        };
        const axisLabel = {
            formatter(text) {
                return moment_1.default(text).format("MM-DD HH:mm");
            },
        };
        return (react_1.default.createElement(wind_1.Loading, { visible: visible, className: helper_1.isEnLanguage() ? 'functionChartWraperEngLish' : 'functionChartWraperChinese', style: { width: '100%', height: visible ? 230 : 230 } },
            react_1.default.createElement("div", { style: { fontSize: 14, fontWeight: 'bold' } },
                " ",
                title,
                " "),
            this.getLengendDom(),
            react_1.default.createElement(bizcharts_1.Chart, { forceUpdate: false, onGetG2Instance: (chart) => { this.chartIns = chart; }, scale: scale, padding: [10, 20, 60, 40], autoFit: true, height: 200, data: data || [], placeholder: react_1.default.createElement("div", { style: { position: 'relative', top: '48%', textAlign: 'center' } }, "\u65E0\u6570\u636E"), filter: [
                    ['names', (value) => {
                            let findName = '';
                            filter.some((item) => {
                                if (item === value) {
                                    findName = value;
                                    return true;
                                }
                            });
                            return value !== findName;
                        }],
                ] },
                react_1.default.createElement(bizcharts_1.Legend, { visible: false }),
                this.toolTipActive(),
                react_1.default.createElement(bizcharts_1.Axis, { name: "value", label: {
                        formatter: (val) => {
                            return helper_1.publicComputeUnit(val, 100, undefined, undefined);
                        },
                    } }),
                react_1.default.createElement(bizcharts_1.Axis, { name: "timestamp", label: axisLabel }),
                react_1.default.createElement(bizcharts_1.LineAdvance, { position: "timestamp*value", color: ['names', (key) => {
                            const findItem = lodash_1.default.find(helper_1.metricLegendListAll, (item) => {
                                return item.legendName === key;
                            });
                            return findItem && findItem.colorPrimary;
                        }] }))));
    }
}
exports.default = LineChart;
//# sourceMappingURL=index.js.map