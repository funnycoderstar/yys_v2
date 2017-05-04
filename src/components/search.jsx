import React, { Component } from 'react';
import Alert from './alert.jsx';
import '../styles/search.less';

class search extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            isShowAlert: false,
            isShowResult: true,
        };
    }
    handleClick = () => {
        this.setState({ isShowAlert: !this.state.isShowAlert });
    }
    handleDelete = () => {
        this.setState({ isShowAlert: false });
        this.setState({ isShowResult: false });
    }
    handleBack = () => {
        window.history.go(-1);
    }
    render() {
        return (
            <div className="searchPage">
                <Alert alertcontent="确定要删除历史记录么?" style={{ display: this.state.isShowAlert ? 'block' : 'none' }} handleClick={this.handleClick} handleDelete={this.handleDelete} />
                <div className="search fix-float">
                    <div>
                        <i className="icon iconLeft" onClick={this.handleBack} />
                    </div>
                    <div className="searchWrap">
                        <i className="icon iconsearch" />
                        <input className="searchText" placeholder="搜索式神" />
                    </div>
                </div>
                <div className="historySearch" style={{ display: this.state.isShowResult ? 'block' : 'none' }}>
                    <div className="title">历史搜索 <i className="icon iconDelete" onClick={this.handleClick} /></div>
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