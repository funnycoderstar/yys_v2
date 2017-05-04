import React, { Component } from 'react';
import HeroHead from './heroHead.jsx';
import HeroNav from './heroNav.jsx';
import HeroSwiper from './heroSwiper.jsx';
import List from '../list.jsx';

class Hero extends Component {
    render() {
        return (
            <div>
                <HeroHead />
                <HeroSwiper />
                <HeroNav />
                <List />
            </div>
        );
    }
}

export default Hero;