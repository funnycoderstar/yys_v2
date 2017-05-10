import React, { Component } from 'react';
import '../../styles/heroNav.less';

class heroNav extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }
    handleClick = (path) => {
        console.log(this.context.router.history.push(path));
    }
    render() {
        return (
            <div className="heroNav">
                <div onClick={() => this.handleClick('/heroPhoto')}>
                    <p className="iconText"><i className="icon iconHero">&#xe64c;</i></p>
                    <p>式神图鉴</p>
                </div>
                <div onClick={() => this.handleClick('/heroSkill')}>
                    <p className="iconText"><i className="icon iconHero">&#xe63d;</i></p>
                    <p>御魂分类</p>
                </div>
                <div onClick={() => this.handleClick('/heroTease')}>
                    <p className="iconText"><i className="icon iconHero">&#xe626;</i></p>
                    <p>斗图套路</p>
                </div>
                <div onClick={() => this.handleClick('/heroBg')}>
                    <p className="iconText"><i className="icon iconHero">&#xe653;</i></p>
                    <p>式神壁纸</p>
                </div>
            </div>
        );
    }
}

export default heroNav;