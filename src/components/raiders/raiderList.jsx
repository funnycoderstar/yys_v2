import React, { Component } from 'react';
import '../../styles/raiderList.less';

class raiderList extends Component {
    render() {
        return (
            <div className="raiderList">
                <div className="listImg">
                    <img src={require('../../assets/gongluo.jpg')} alt="" />
                </div>
                <div className="listContent">
                    <div className="contentTitle">
                        以津真天和鸩哪个好 两大SR新式神对比
                   </div>
                    <div className="aboutContent">
                        阴阳师以津真天和鸩哪个好?作为两大SR新式神，都是带有羽毛的。本篇就来对比下以津真天和鸩的技能和实战效果，看看哪个给好用。
                    </div>
                </div>
            </div>
        );
    }
}

export default raiderList;