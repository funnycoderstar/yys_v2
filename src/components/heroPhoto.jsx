import React, { Component } from 'react';
import {
    Tabs,
} from 'antd';
import { connect } from 'react-redux';
import HeroInfo from './heroInfo.jsx';
import { updateHeros } from '../redux/action.js';
import '../styles/heroPhoto.less';
import ApiUrl from '../config/apiUrl.js';

const TabPane = Tabs.TabPane;

class heroPhoto extends Component {
    componentDidMount() {
        updateHeros(this.props.dispatch);
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="SSR" key="1">
                        {
                            this.props.heros.map((item, index) => (
                                <HeroInfo key={index} heroName={item.name} imgSrc={`${ApiUrl.apiUrl}${item.name}.jpg`} style={{ display: item.rarity === 'SSR' ? 'block' : 'none' }} />
                            ))
                        }
                    </TabPane>
                    <TabPane tab="SR" key="2">
                        {
                            this.props.heros.map((item, index) => (
                                <HeroInfo key={index} heroName={item.name} imgSrc={`${ApiUrl.apiUrl}${item.name}.jpg`} style={{ display: item.rarity === 'SR' ? 'block' : 'none' }} />
                            ))
                        }
                    </TabPane>
                    <TabPane tab="R" key="3">
                        {
                            this.props.heros.map((item, index) => (
                                <HeroInfo key={index} heroName={item.name} imgSrc={`${ApiUrl.apiUrl}${item.name}.jpg`} style={{ display: item.rarity === 'R' ? 'block' : 'none' }} />
                            ))
                        }
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default connect(
    state => ({
        heros: state.get('heros'),
    }),
)(heroPhoto);