import React, { Component } from 'react';
import '../../styles/heroNav.less';

class heroNav extends Component {
    render() {
        return (
            <div className="heroNav">
                <div>
                    <p className="iconText"><i className="icon iconHero">&#xe64c;</i></p>
                    <p>式神图鉴</p>
                </div>
                <div>
                    <p className="iconText"><i className="icon iconHero">&#xe63d;</i></p>
                    <p>御魂秘籍</p>
                </div>
                <div>
                    <p className="iconText"><i className="icon iconHero">&#xe626;</i></p>
                    <p>斗图套路</p>
                </div>
                <div>
                    <p className="iconText"><i className="icon iconHero">&#xe653;</i></p>
                    <p>式神壁纸</p>
                </div>
            </div>
        );
    }
}

export default heroNav;