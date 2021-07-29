
import React, { Component } from 'react';
import Page from '@alicloud/console-components-page';
import { Link } from 'react-router-dom';
import Details from '../RequestDetails/index';
import '../RequestDetails/index.scoped.less';

class RequestInfo extends Component {

    render() {
        return (
            <Page>
                <Page.Content>
                    <Link style={{fontSize:'14px'}} to='/'> {`<-- 返回`}</Link>
                    <Details />
                </Page.Content>
            </Page>
        );
    }
}

export default RequestInfo;