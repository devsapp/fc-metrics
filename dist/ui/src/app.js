"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const console_components_page_1 = __importDefault(require("@alicloud/console-components-page"));
const Header_1 = __importDefault(require("./components/Header"));
const LineChart_1 = __importDefault(require("./components/LineChart"));
const context_1 = require("./context");
exports.default = () => {
    return (react_1.default.createElement(context_1.UserProvider, null,
        react_1.default.createElement(console_components_page_1.default, null,
            react_1.default.createElement(console_components_page_1.default.Content, null,
                react_1.default.createElement(Header_1.default, null),
                react_1.default.createElement(LineChart_1.default, null)))));
};
//# sourceMappingURL=app.js.map