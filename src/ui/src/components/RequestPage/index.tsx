
import React, { Component } from 'react';
import Page from '@ali/wind-rc-page';
import Details from '../RequestDetails/index';
import '../RequestDetails/index.scoped.less';

class RequestInfo extends Component {

    render() {
        const historyBack = {
            pathname: `/`,
            state: {},
            search: ``,
        }
        return (
            <Page>
                <Page.Nav />
                <Page.Title
                    historyBack={historyBack}
                    text={<span>返回</span>}
                    childrenAlign="right"
                />
                <Page.Content>
                    <Details />
                </Page.Content>
            </Page>
        );
    }
}

export default RequestInfo;