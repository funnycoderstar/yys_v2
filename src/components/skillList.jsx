import React, { Component } from 'react';
import '../styles/skillList.less';

class skillLsit extends Component {
    render() {
        return (
            <div className="skillList">
                <div className="listItem">
                    <img src={require('../assets/img1.jpg')} alt="" />
                </div>
                <div className="listItem">
                    <img src={require('../assets/img2.jpg')} alt="" />
                </div>
            </div>
        );
    }
}

export default skillLsit;