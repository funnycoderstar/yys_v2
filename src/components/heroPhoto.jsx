import React, { Component } from 'react';
import {
    Tabs,
} from 'antd';
import HeroInfo from './heroInfo.jsx';

import '../styles/heroPhoto.less';

const TabPane = Tabs.TabPane;

class heroPhoto extends Component {
    handleCallback = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="SSR" key="1">
                        <HeroInfo />
                    </TabPane>
                    <TabPane tab="SR" key="2">
                        <HeroInfo />
                    </TabPane>
                    <TabPane tab="R" key="3">
                        <HeroInfo />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default heroPhoto;