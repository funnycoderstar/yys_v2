import React, { Component } from 'react';
import { Link } from 'react-router';
import '../../styles/heroHead.less';

class HomeHead extends Component {
    render() {
        return (
            <div>
                <input className="searchInput" placeholder="搜索式神" />
                {/* <Link to="video">视频</Link>*/}
            </div>
        );
    }
}

export default HomeHead;
