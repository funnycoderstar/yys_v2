import React, { Component } from 'react';
import HeroHead from './heroHead.jsx';
import HeroNav from './heroNav.jsx';
import HeroSwiper from './heroSwiper.jsx';
import RaiderList from '../raiders/raiderList.jsx';

class Hero extends Component {
    render() {
        return (
            <div className="pageContainer">
                <HeroHead />
                <HeroSwiper />
                <HeroNav />
                <RaiderList />
            </div>
        );
    }
}

export default Hero;