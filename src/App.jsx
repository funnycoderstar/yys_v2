import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
// } from 'react-router-dom';

// import TabBar from './components/tabBar';
import TabBar from './components/tabItem';
// import hero from './components/hero/heroHead';
// import raider from './components/raiders/raiders';
// import recommend from './components/recommend/recommend';
// import video from './components/video/video';

// App can't be stateless component
export default class App extends Component {
    // constructor(...args) {
    //     super(...args);
    //     this.state = {
    //         count: 0,
    //     };
    // }
    // handleClick = () => {
    //     this.setState({ count: this.state.count + 1 });
    // }
    render() {
        return (
            <div className="container" >
                <TabBar>
                    <div name="first">
                        第一帧
                    </div>
                    <div name="second">
                        第二帧
                    </div>
                    <div name="third">
                        第三帧
                    </div>
                </TabBar>
            </div >
        );
    }
}
