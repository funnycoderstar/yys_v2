import React, { Component } from 'react';
import '../../styles/heroHead.less';

class HomeHead extends Component {

    render() {
        return (
            <div>
                <input className="searchInput" placeholder="搜索式神" />
            </div>
        );
    }
}

export default HomeHead;
