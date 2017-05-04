import React, { Component } from 'react';
import Hero from 'components/hero/hero';
import Raider from 'components/raiders/raiders';
import Recommend from 'components/recommend/recommend';
import Video from 'components/video/video';

import '../styles/tabBar.less';

class TabBar extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            selected: 1,
        };
    }
    handleClick = (index) => {
        this.setState({ selected: index });
    }
    render() {
        return (
            <div className="page">
                <Hero style={{ display: this.state.selected === 1 ? 'block' : 'none' }} />
                <Raider style={{ display: this.state.selected === 2 ? 'block' : 'none' }} />
                <Recommend style={{ display: this.state.selected === 3 ? 'block' : 'none' }} />
                <Video style={{ display: this.state.selected === 4 ? 'block' : 'none' }} />
                <div className="tabBar">
                    {
                        [{ name: '式神', content: 'icon1' }, { name: '推荐', content: 'icon2' }, { name: '视频', content: 'icon3' }, { name: '攻略', content: 'icon4' }].map((item, index) => (
                            <div
                                key={index}
                                className="tabTitle"
                                style={{ color: this.state.selected === index + 1 ? 'red' : '#666' }} onClick={this.handleClick.bind(this, index + 1)}
                            >
                                <i className={item.content} />
                                <p className="tabText" >{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TabBar;
