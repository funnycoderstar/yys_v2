import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroSwiper from '../hero/heroSwiper.jsx';
import '../../styles/raiderList.less';
import { updateHeroVideo } from '../../redux/action.js';

class raiderList extends Component {
    componentDidMount() {
        updateHeroVideo(this.props.dispatch);
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