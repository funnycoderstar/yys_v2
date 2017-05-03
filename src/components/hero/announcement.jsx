import React, { Component } from 'react';
import '../../styles/announcement.less';

class announcement extends Component {
    render() {
        return (
            <div className="index-announcement fix-float">
                <i className="icon iconNotice" />
                <p className="announcement-text">这是公告内容</p>
            </div>
        );
    }
}

export default announcement;