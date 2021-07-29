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
const react_1 = __importStar(require("react"));
class Tr extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    initState() {
        let { row = {} } = this.props;
        this.setState({
            collapsed: !!this.state.collapsed,
            isLeaf: !(row.children && row.children.length)
        });
    }
    componentWillMount(props) {
        this.initState();
    }
    componentWillReceiveProps() {
        this.initState();
    }
    render() {
        let { row = {}, expandOn = {}, columns = [], level = 0, hide = false } = this.props;
        let { collapsed, isLeaf } = this.state;
        let left = level * 20 + 5;
        let expandStyle = Object.assign({ paddingLeft: left + 15, position: 'relative' }, expandOn.style);
        return (react_1.default.createElement(react_1.Fragment, null,
            react_1.default.createElement("tr", { style: { display: hide ? 'none' : '' } },
                react_1.default.createElement("td", { style: expandStyle },
                    !isLeaf && react_1.default.createElement("span", { className: `dora-arrow ${collapsed ? 'right' : 'down'}`, style: { left }, onClick: () => this.setState({ collapsed: !collapsed }) }),
                    expandOn.render ? expandOn.render(row, expandOn) : row[expandOn.field]),
                columns.map((col, i) => react_1.default.createElement("td", { className: col.className, style: col.style, key: i }, col.render ? col.render(row, col) : row[col.field]))),
            !isLeaf && row.children.map((row, i) => react_1.default.createElement(Tr, { hide: hide || collapsed, key: i, row: row, expandOn: expandOn, columns: columns, level: level + 1 }))));
    }
}
class TreeGrid extends react_1.Component {
    render() {
        let { expandOn = {}, columns = [], data = [], className = '', theadClassName = '', tbodyClassName = '' } = this.props;
        return (react_1.default.createElement("table", { className: `dora-tree-grid ${className}` },
            react_1.default.createElement("thead", { className: theadClassName },
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, expandOn.displayName),
                    columns.map((item, i) => react_1.default.createElement("th", { key: i }, item.displayName)))),
            react_1.default.createElement("tbody", { className: tbodyClassName }, data.map((row, i) => react_1.default.createElement(Tr, { key: i, row: row, expandOn: expandOn, columns: columns })))));
    }
}
exports.default = TreeGrid;
//# sourceMappingURL=TreeGrid.js.map