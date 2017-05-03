import React, { Component } from 'react';
import '../../styles/heroNav.less';

class heroNav extends Component {
    render() {
        return (
            <div className="heroNav">
                <div>
                    <p className="iconText"><i className="iconHero" /></p>
                    <p>式神图鉴</p>
                </div>
                <div>
                    <p className="iconText"><i className="iconHero" /></p>
                    <p>御魂秘籍</p>
                </div>
                <div>
                    <p className="iconText"><i className="iconHero" /></p>
                    <p>斗图套路</p>
                </div>
                <div>
                    <p className="iconText"><i className="iconHero" /></p>
                    <p>式神壁纸</p>
                </div>
            </div>
        );
    }
}

export default heroNav;