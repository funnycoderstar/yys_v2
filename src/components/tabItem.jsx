import React, { Component } from 'react';
// import { Link } from 'react-router';
import '../styles/tab.less';

class TabItem extends Component {
    render() {
        return (
            <div className="tabTitle">
                <i className="icon" />
                <p className="tabText" >{this.props.name}</p>
            </div>
        );
    }
}

export default TabItem;

