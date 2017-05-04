import React, { Component } from 'react';
import '../styles/list.less';

class list extends Component {
    render() {
        return (
            <div className="list">
                <div className="listImg">
                    <img src={require('../assets/yin.jpg')} alt="" />
                </div>
                <div className="listContent">
                    <div className="contentTitle">
                        [杂谈]老玩家经验分享: 道具使用的技巧
                   </div>
                    <div className="aboutContent">
                        <span>1小时前</span>
                        <span>89评</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default list;