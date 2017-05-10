import React, { Component } from 'react';
import HeroSwiper from '../hero/heroSwiper.jsx';
import RaiderList from '../raiders/raiderList.jsx';

class video extends Component {
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

export default video;
