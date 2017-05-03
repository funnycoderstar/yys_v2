import React, { Component } from 'react';
import HeroHead from './heroHead.jsx';
import HeroNav from './heroNav.jsx';
import HeroSwiper from './heroSwiper.jsx';

class Hero extends Component {
    render() {
        return (
            <div>
                <HeroHead />
                <HeroSwiper />
                <HeroNav />
            </div>
        );
    }
}

export default Hero;