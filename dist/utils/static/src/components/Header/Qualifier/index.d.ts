import React from 'react';
import './index.css';
interface ForwardRefProperty {
    getTimeConfig: () => void;
    ref: React.Ref<any>;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ForwardRefProperty, "getTimeConfig"> & React.RefAttributes<unknown>>;
export default _default;
