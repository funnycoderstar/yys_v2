import React, { Component } from 'react';
// import { Link } from 'react-router';
import '../styles/tab.less';

class TabItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '首页',
    //     };
    // }
    handelClick: () => {

    }
    render() {
        return (
            <div className="tabTitle">
                <i className="icon" />
                <p className="tabText" >{ this.props.name }</p>
            </div>
        );
    }
}

export default TabItem;

