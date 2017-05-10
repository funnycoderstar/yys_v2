import React, { Component } from 'react';
import '../styles/heroBg.less';

class heroBg extends Component {
    render() {
        return (
            <div className="heroBg" >
                <div className="heroBgItem">
                    <img src={require('../assets/1.jpg')} />
                    <img src={require('../assets/1.jpg')} />
                    <img src={require('../assets/1.jpg')} />
                </div>
                <div className="heroBgItem">
                    <img src={require('../assets/2.jpg')} />
                    <img src={require('../assets/2.jpg')} />
                    <img src={require('../assets/2.jpg')} />
                </div>
            </div>
        );
    }
}

export default heroBg;