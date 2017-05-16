import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import HeroHead from './heroHead.jsx';
import HeroNav from './heroNav.jsx';
import HeroSwiper from './heroSwiper.jsx';
import RaiderList from '../raiders/raiderList.jsx';
// import ListWrap from '../listWrap.jsx';

import ApiUrl from '../../config/apiUrl.js';

class Hero extends Component {
    componentDidMount() {
        // console.log(this.props);
        axios.get(ApiUrl.herosUrl).then((res) => {
            // console.log(res);
            this.props.dispatch({
                type: 'updateHeros',
                heros: res.data,
            });
            // console.log(this.props.heros);
        });
    }
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

export default connect(
    state => ({
        heros: state.get('heros'),
    }),
)(Hero);