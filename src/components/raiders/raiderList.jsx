import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/raiderList.less';
import { updateHeroStrategy } from '../../redux/action.js';

class raiderList extends Component {
    componentDidMount() {
        updateHeroStrategy(this.props.dispatch);
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