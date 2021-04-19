import React, { forwardRef } from 'react';
import './index.css';
interface forwardRef {
    getTimeConfig: () => void;
    ref: React.Ref<any>;
}
declare const _default: React.ForwardRefExoticComponent<Pick<forwardRef, "getTimeConfig"> & React.RefAttributes<unknown>>;
export default _default;
