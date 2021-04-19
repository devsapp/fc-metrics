import { Component } from 'react';
interface ChartProperty {
    legendList: any;
    data: any;
    sizePerRow: number;
    maxWidth: number;
    isActive: boolean;
    title: string;
    visible: boolean;
    params: any;
}
interface LineChart {
    state: StateType;
    chartIns: any;
}
interface StateType {
    filter: any;
    legendMap: any;
}
declare class LineChart extends Component<ChartProperty, {}> {
    constructor(props: any);
    componentDidMount(): void;
    handleChangeToolTip: (legendMap: any) => void;
    onLengendChange: (value: any, legendMap: any) => void;
    getLengendDom: () => JSX.Element;
    toolTipActive(): JSX.Element;
    render(): JSX.Element;
}
export default LineChart;
