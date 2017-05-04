import React, { Component } from 'react';
import '../styles/search.less';

class search extends Component {
    render() {
        return (
            <div className="searchPage">
                <div className="search fix-float">
                    <div>
                        <i className="icon iconLeft" />
                    </div>
                    <div className="searchWrap">
                        <i className="icon iconsearch" />
                        <input className="searchText" placeholder="搜索式神" />
                    </div>
                </div>
                <div className="historySearch">
                    <div className="title">历史搜索 <i className="icon iconDelete" /></div>
                    <div className="historyResult result fix-float">
                        <span>犬神</span>
                        <span>跳跳弟弟</span>
                    </div>
                </div>
                <div className="HotSearch">
                    <div className="title">热门搜索</div>
                    <div className="hotResult result fix-float">
                        <span>犬神</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default search;