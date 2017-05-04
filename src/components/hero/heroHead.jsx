import React, { Component } from 'react';
import '../../styles/heroHead.less';

class heroHead extends Component {
    handleSearch = () => {
        // console.log(window.location.href);
        window.location.href = '/search';
    }

    render() {
        return (
            <div className="heroHead">
                <div className="searchInput" onClick={this.handleSearch}>
                    <i className="icon iconSearch" />
                    <p className="searchHero">搜索式神</p>
                </div>
            </div>
        );
    }
}

export default heroHead;
