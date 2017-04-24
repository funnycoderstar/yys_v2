import React, { Component } from 'react';

import '../styles/tab.less';

class TabItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '首页',
    //     };
    // }
    // handelClick: () => {

    // }
    render() {
        return (
            <div>
                {/* <i className="icon"><i/>*/}
                <p className="tabTitle">{this.props.name}</p>
            </div>
        );
    }
}

export default TabItem;

