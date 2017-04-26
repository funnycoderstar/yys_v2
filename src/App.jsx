import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import TabBar from './components/tabBar';
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
            <Router history={history}>
                <Route path="/" component={TabBar} >
                    {/* <Route path="/hero" component={hero} />
                    <Route path="/raider" component={raider} />
                    <Route path="/recommend" component={recommend} />
                    <Route path="/video" component={video} />*/}
                </Route>
            </Router>
        );
    }
}
