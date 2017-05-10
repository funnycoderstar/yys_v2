import React, { Component } from 'react';
import HeroSwiper from '../hero/heroSwiper.jsx';
import RaiderList from './raiderList.jsx';

class Raiders extends Component {
    render() {
        return (
            <div>
                <HeroSwiper />
                <RaiderList />
                <RaiderList />
                <RaiderList />
                <RaiderList />
                <RaiderList />
            </div>
        );
    }
}

export default Raiders;
