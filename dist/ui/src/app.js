"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const context_1 = require("./context");
const react_router_1 = require("react-router");
const functionPage_1 = __importDefault(require("./functionPage"));
const RequestPage_1 = __importDefault(require("./components/RequestPage"));
exports.default = () => {
    return (react_1.default.createElement(context_1.UserProvider, null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(react_router_1.Route, { path: '/', exact: true, component: functionPage_1.default }),
                react_1.default.createElement(react_router_1.Route, { path: '/details', exact: true, component: RequestPage_1.default })))));
};
//# sourceMappingURL=app.js.map