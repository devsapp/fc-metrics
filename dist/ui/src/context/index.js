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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseConsumer = exports.UserProvider = exports.UserContext = void 0;
const react_1 = __importStar(require("react"));
// 1. 使用 createContext 创建上下文
exports.UserContext = react_1.default.createContext({});
// 2. 创建 Provider
exports.UserProvider = (props) => {
    const [config, setConfig] = react_1.useState({});
    return (react_1.default.createElement(exports.UserContext.Provider, { value: { config, setConfig } }, props.children));
};
// 3. 创建 Consumer
exports.UseConsumer = exports.UserContext.Consumer;
//# sourceMappingURL=index.js.map