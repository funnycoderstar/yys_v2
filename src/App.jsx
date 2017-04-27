import React, { Component } from 'react';

import '../src/styles/hello.less';
// import {
//     BrowserRouter as Router,
//     Route,
// } from 'react-router-dom';

// import TabBar from './components/tabBar';
// import TabBar from './components/tabItem';
// import hero from './components/hero/heroHead';
// import raider from './components/raiders/raiders';
// import recommend from './components/recommend/recommend';
// import video from './components/video/video';

// App can't be stateless component
// class A extends Component {
//     render() {
//         return <div>A</div>;
//     }
// }
// class B extends Component {
//     render() {
//         return <div>B</div>;
//     }
// }
// class C extends Component {
//     render() {
//         return <div>C</div>;
//     }
// }

export default class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            selected: 0,
        };
    }
    handleClick = (index) => {
        this.setState({ selected: index });
    }
    render() {
        return (
            <div className="tabBar">
                {
                    ['式神', '推荐', '视频', '攻略'].map((item, index) => (
                        <div
                            className="tabTitle"
                            style={{ color: this.state.selected === index + 1 ? 'red' : 'black' }} onClick={this.handleClick.bind(this, index + 1)}
                        >
                            <i className="icon" />
                            <p className="tabText" >{item}</p>
                        </div>
                    ))
                }
                {/* <Router>
                    <div>
                        <Route path="/1" component={A} />
                        <Route path="/2" component={B} />
                        <Route path="/3" component={C} />
                    </div>
                </Router>*/}
            </div >
        );
    }
}
