import React, { Component } from 'react';

class announcement extends Component {
    render() {
        return (
            <div className="index-announcement fix-float">
                <i className="icon iconNotice" />
                <p className="announcement-text">{news.articleTitle}</p>
            </div>
        );
    }
}

export default announcement;