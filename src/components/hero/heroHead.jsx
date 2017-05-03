import React, { Component } from 'react';
import '../../styles/heroHead.less';

class heroHead extends Component {

    render() {
        return (
            <div className="heroHead">
                <div className="searchInput">
                    <i className="icon iconSearch" />
                    <input className="search" placeholder="搜索式神" />
                </div>
            </div>
        );
    }
}

export default heroHead;
