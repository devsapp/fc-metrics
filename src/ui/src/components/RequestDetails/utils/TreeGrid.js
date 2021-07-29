import React, {Component, Fragment} from 'react';

class Tr extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    initState() {
        let {row = {}} = this.props;
        this.setState({
            collapsed: !!this.state.collapsed,
            isLeaf: !(row.children && row.children.length)
        });
    }

    componentWillMount(props) {
        this.initState()
    }

    componentWillReceiveProps() {
        this.initState()
    }

    render() {
        let {row = {}, expandOn = {}, columns = [], level = 0, hide = false} = this.props;
        let {collapsed, isLeaf} = this.state;
        let left = level * 20 + 5;
        let expandStyle = Object.assign({paddingLeft: left + 15, position: 'relative'}, expandOn.style);
        return (
            <Fragment>
                <tr style={{display: hide ? 'none' : ''}}>
                    <td style={expandStyle}>
                        {!isLeaf && <span className={`dora-arrow ${collapsed ? 'right' : 'down'}`} style={{left}} onClick={() => this.setState({collapsed: !collapsed})}/>}
                        {expandOn.render ? expandOn.render(row, expandOn) : row[expandOn.field]}
                    </td>
                    {columns.map((col, i) =>
                        <td className={col.className} style={col.style} key={i}>{col.render ? col.render(row, col) : row[col.field]}</td>
                    )}
                </tr>
                {!isLeaf && row.children.map((row, i) => <Tr hide={hide || collapsed} key={i} row={row} expandOn={expandOn} columns={columns} level={level + 1}/>)}
            </Fragment>
        );
    }
}

class TreeGrid extends Component {

    render() {
        let {expandOn = {}, columns = [], data = [], className = '', theadClassName = '', tbodyClassName = ''} = this.props;
        return (
            <table className={`dora-tree-grid ${className}`}>
                <thead className={theadClassName}>
                <tr>
                    <th>{expandOn.displayName}</th>
                    {columns.map((item, i) =>
                        <th key={i}>{item.displayName}</th>
                    )}
                </tr>
                </thead>
                <tbody className={tbodyClassName}>
                {data.map((row, i) => <Tr key={i} row={row} expandOn={expandOn} columns={columns}/>)}
                </tbody>
            </table>
        );
    }
}


export default TreeGrid;