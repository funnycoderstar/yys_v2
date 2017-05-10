import React, { Component } from 'react';
import HeroHead from './heroHead.jsx';
import HeroNav from './heroNav.jsx';
import HeroSwiper from './heroSwiper.jsx';
import ListWrap from '../listWrap.jsx';

class Hero extends Component {
    render() {
        return (
            <div className="pageContainer">
                <HeroHead />
                <HeroSwiper />
                <HeroNav />
                <ListWrap />
            </div>
        );
    }
}

export default Hero;