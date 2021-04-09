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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const console_components_1 = require("@alicloud/console-components");
const moment_1 = __importDefault(require("moment"));
const debounce_1 = __importDefault(require("lodash/debounce"));
require("./index.css");
const { RangePicker } = console_components_1.DatePicker;
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
exports.default = react_1.forwardRef((props, ref) => {
    const [recent, setRecent] = react_1.useState('hours');
    const [endTime, setEndValue] = react_1.useState(moment_1.default());
    const [startTime, setStartValue] = react_1.useState(moment_1.default().subtract(1, 'hours'));
    const [period, setPeriod] = react_1.useState(60);
    react_1.useEffect(() => {
        if (getTimeConfigFlag) {
            props.getTimeConfig();
            getTimeConfigFlag = false;
        }
        clearInterval(timer);
        if (recent === 'hours') {
            timer = setInterval(() => recentChange(recent), 30 * 1000);
        }
    }, [period, endTime, startTime, recent]);
    const onRangeOk = (dateValues) => __awaiter(void 0, void 0, void 0, function* () {
        const startTimeMonment = moment_1.default(dateValues[0]);
        const endTimeMonment = moment_1.default(dateValues[1]);
        const startTime = startTimeMonment.valueOf();
        const endTime = endTimeMonment.valueOf();
        const difference = moment_1.default.duration(endTime - startTime, 'ms').asHours();
        if (difference === 0) {
            return console_components_1.Message.warning('开始时间必须小于结束时间');
        }
        const period = pecentPeriodObject.getPeriod(difference);
        setRecent('customize');
        setStartValue(dateValues[0]);
        setEndValue(dateValues[1]);
        setPeriod(period);
        props.getTimeConfig();
    });
    const recentChange = (value) => {
        if (value === 'customize') {
            setRecent('customize');
            return;
        }
        getTimeConfigFlag = true;
        const endTime = moment_1.default();
        const period = pecentPeriodObject[value];
        const startTime = moment_1.default().subtract(1, value);
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
    react_1.useImperativeHandle(ref, () => ({
        endTime: moment_1.default(endTime).valueOf(),
        startTime: moment_1.default(startTime).valueOf(),
        // endTime: 1602212937315,
        // startTime: 1602209337316,
        period,
    }));
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(RangePicker, { label: "\u65F6\u95F4\u8303\u56F4", value: [startTime, endTime], onChange: (dateValues) => {
                if (dateValues[0]) {
                    setStartValue(dateValues[0]);
                    getTimeConfigFlag = false;
                }
                if (dateValues[1]) {
                    setEndValue(dateValues[1]);
                    getTimeConfigFlag = false;
                }
            }, onOk: onRangeOk, disabledDate: (date) => date.valueOf() > moment_1.default() || date.valueOf() < moment_1.default().subtract(1, 'months'), className: "marginLeft", style: { width: 465 }, format: "YYYY\u5E74MM\u6708DD\u65E5", showTime: { format: 'HH:mm' } }),
        react_1.default.createElement(console_components_1.Select, { label: recent !== 'customize' && '最近', value: recent, dataSource: defaultRecentList, className: "marginLeft", onChange: recentChange }),
        react_1.default.createElement(console_components_1.Button, { onClick: debounce_1.default(refreshTime, 200), className: "marginLeft" },
            react_1.default.createElement(console_components_1.Icon, { type: "refresh" }))));
});
//# sourceMappingURL=index.js.map