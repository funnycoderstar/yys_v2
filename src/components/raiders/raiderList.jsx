import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../styles/raiderList.less';
import ApiUrl from '../../config/apiUrl.js';

class raiderList extends Component {
    componentDidMount() {
        axios.get(ApiUrl.heroStrategyUrl).then((res) => {
            this.props.dispatch({
                type: 'updateHeroStrategy',
                heroStrategy: res.data,
            });
        });
    }

    render() {
        return (
            <div>

                {
                this.props.heroStrategy.map((item, index) => (
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
        heroStrategy: state.get('heroStrategy'),
    }),
)(raiderList);