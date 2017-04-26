/* import React from 'react';

import '../styles/hello.less';

export default function Hello({ is }) {
    return (
        <div>
            <span style={{ color: is ? 'red' : 'yellow' }}>Hello</span>
        </div>
    );
}

Hello.propTypes = {
    is: React.PropTypes.bool.isRequired,
};*/

import React, { Component } from 'react';
import TabItem from './tabItem';

import '../styles/hello.less';

class TabBar extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="tabBar">
                <div className="fix-float">
                    <TabItem name="式神" />
                    <TabItem name="推荐" />
                    <TabItem name="视频" />
                    <TabItem name="攻略" />
                </div>
            </div>
        );
    }
}

export default TabBar;
