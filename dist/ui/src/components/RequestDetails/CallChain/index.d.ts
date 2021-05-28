export class Detail extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    goto(item: any, ServiceName: any): JSX.Element;
    getTagMap(data: any, ServiceName: any): JSX.Element;
    getLogMap(data: any): JSX.Element;
}
export default CallChain;
import React from "react";
declare class CallChain extends React.Component<any, any, any> {
    static propTypes: {};
    static defaultProps: {};
    constructor(props: any);
    constructor(props: any, context: any);
    getCallChain(): void;
}
