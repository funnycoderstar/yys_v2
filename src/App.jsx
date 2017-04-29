import React, { Component } from 'react';

// import {
//     BrowserRouter as Router,
//     Route,
// } from 'react-router-dom';

import TabBar from './components/tabBar';

// App can't be stateless component
export default class App extends Component {
    render() {
        return (
            <div>
                <TabBar />
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
