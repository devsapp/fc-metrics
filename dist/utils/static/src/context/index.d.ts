import React from 'react';
interface IContextProps {
    config: {};
    setConfig: ({}: any) => void;
}
export declare const UserContext: React.Context<IContextProps>;
export declare const UserProvider: (props: any) => JSX.Element;
export declare const UseConsumer: React.Consumer<IContextProps>;
export {};
