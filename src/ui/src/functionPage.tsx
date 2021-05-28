import React, { Component } from 'react';
import Page from '@alicloud/console-components-page';
import Header from './components/Header';
import LineChart from './components/LineChart';
import RequestTableList from './components/RequestTableList';

class PageInfo extends Component {
    render() {
        return (
            <Page>
                <Page.Content>
                    <Header />
                    <LineChart />
                    <RequestTableList />
                </Page.Content>
            </Page>
        );
    }
}

export default PageInfo;