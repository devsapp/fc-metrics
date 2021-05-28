export default FuncCallLine;
declare class FuncCallLine extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace FuncCallLine {
    export namespace propTypes {
        export const timeLineData: PropTypes.Requireable<any[]>;
        export const expandRow: PropTypes.Requireable<any[]>;
        export const timeLineDataOriginData: PropTypes.Requireable<object>;
    }
}
import React from "react";
import PropTypes from "prop-types";
