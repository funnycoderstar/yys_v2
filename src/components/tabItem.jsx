import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router';
import '../styles/tab.less';

class TabItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '首页',
    //     };
    // }
    /* constructor() {
        super();
        this.state = {
            currentIndex: 0,
        };
    }
    check_title_index(index) {
        return index === this.state.currentIndex ? 'tab_title active' : 'tab_title';
    }
    handelClick: () => {

    }
    render() {
        return (
            <div className="tabTitle">
                <i className="icon" />
                <p className="tabText" >{this.props.name}</p>
            </div>
        );
    }*/
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
        };
    }

    check_tittle_index(index) {
        return index === this.state.currentIndex ? 'Tab_tittle active' : 'Tab_tittle';
    }

    check_item_index(index) {
        return index === this.state.currentIndex ? 'Tab_item show' : 'Tab_item';
    }

    render() {
        // const _this = this;
        return (
            <div>
                {/* 动态生成Tab导航*/}
                <div className="Tab_tittle_wrap">
                    {React.Children.map(this.props.children, (element, index) => (
                        /* 箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                        <div onClick={() => { this.setState({ currentIndex: index }); }} className={this.check_tittle_index(index)}>{element.props.name}</div>
                    ))}
                </div>
                {/* Tab内容区域*/}
                <div className="Tab_item_wrap">
                    {React.Children.map(this.props.children, (element, index) => (
                        <div className={this.check_item_index(index)}>{element}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default TabItem;

