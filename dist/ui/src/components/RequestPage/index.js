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
const wind_rc_page_1 = __importDefault(require("@ali/wind-rc-page"));
const index_1 = __importDefault(require("../RequestDetails/index"));
require("../RequestDetails/index.scoped.less");
class RequestInfo extends react_1.Component {
    render() {
        const historyBack = {
            pathname: `/`,
            state: {},
            search: ``,
        };
        return (react_1.default.createElement(wind_rc_page_1.default, null,
            react_1.default.createElement(wind_rc_page_1.default.Nav, null),
            react_1.default.createElement(wind_rc_page_1.default.Title, { historyBack: historyBack, text: react_1.default.createElement("span", null, "\u8FD4\u56DE"), childrenAlign: "right" }),
            react_1.default.createElement(wind_rc_page_1.default.Content, null,
                react_1.default.createElement(index_1.default, null))));
    }
}
exports.default = RequestInfo;
//# sourceMappingURL=index.js.map