import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import HeroSwiper from '../hero/heroSwiper.jsx';
import '../../styles/raiderList.less';
import ApiUrl from '../../config/apiUrl.js';

class raiderList extends Component {
    componentDidMount() {
        axios.get(ApiUrl.heroVideoUrl).then((res) => {
            this.props.dispatch({
                type: 'updateHeroVideo',
                heroVideo: res.data,
            });
        });
        console.log(this.props.heroVideo);
    }

    render() {
        return (
            <div className="pageContainer">
                <HeroSwiper />
                {
                this.props.heroVideo.map((item, index) => (

                    <a className="raiderList" key={index} href={item.href}>
                        <div className="listImg">
                            <img src={item.imgSrc} alt="" />
                        </div>
                        <div className="listContent">
                            <div className="contentTitle">
                                {item.title}
                            </div>
                            <div className="aboutContent">
                                {item.desc[0]}
                            </div>
                        </div>
                    </a>
                ))
            }</div>

        );
    }
}

export default connect(
    state => ({
        heroVideo: state.get('heroVideo'),
    }),
)(raiderList);