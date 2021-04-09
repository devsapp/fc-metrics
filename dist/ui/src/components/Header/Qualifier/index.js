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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const console_components_1 = require("@alicloud/console-components");
const index_1 = require("../../../request/index");
require("./index.css");
let getTimeConfigFlag = false; // 是否获取数据
exports.default = react_1.forwardRef((props, ref) => {
    const [qualifier, setQualifier] = react_1.useState({ lable: 'LATEST', value: 'LATEST' });
    const [visible, setVisible] = react_1.useState(false);
    const [listVersions, setListVersions] = react_1.useState([]);
    const [listAlias, setListAlias] = react_1.useState([]);
    react_1.useEffect(() => {
        if (visible) {
            getQualifier();
        }
        if (getTimeConfigFlag) {
            props.getTimeConfig();
            getTimeConfigFlag = false;
        }
    }, [visible]);
    // 获取版本别名列表
    function getQualifier() {
        return __awaiter(this, void 0, void 0, function* () {
            const versions = yield index_1.getVersion();
            versions.unshift({ versionId: 'LATEST' });
            setListVersions(versions);
            const aliases = yield index_1.getAlias();
            setListAlias(aliases);
        });
    }
    function selectChange(qualifierValue) {
        setQualifier({ lable: qualifierValue, value: qualifierValue });
        setVisible(false);
        getTimeConfigFlag = true;
    }
    react_1.useImperativeHandle(ref, () => ({ qualifier: qualifier.value }));
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(console_components_1.Select, { label: "\u7248\u672C/\u522B\u540D", value: qualifier, visible: visible, onVisibleChange: setVisible, style: { width: 200 }, className: "marginLeft", popupContent: (react_1.default.createElement(console_components_1.Tab, { className: "qualifier-dropdownTab", size: "small" },
                react_1.default.createElement(console_components_1.Tab.Item, { key: "version", title: react_1.default.createElement("span", null, "\u7248\u672C") },
                    react_1.default.createElement("div", { className: "dropdownTabItem" }, listVersions.map(({ versionId }) => react_1.default.createElement("p", { key: versionId, onClick: () => selectChange(versionId) }, versionId)))),
                react_1.default.createElement(console_components_1.Tab.Item, { key: "alias", title: react_1.default.createElement("span", null, "\u522B\u540D") },
                    react_1.default.createElement("div", { className: "dropdownTabItem" }, listAlias.map(({ aliasName }) => react_1.default.createElement("p", { key: aliasName, title: aliasName, onClick: () => selectChange(aliasName) }, aliasName)))))) })));
});
//# sourceMappingURL=index.js.map