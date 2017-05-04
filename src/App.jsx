import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import TabBar from './components/tabBar';
import Search from './components/search';

// App can't be stateless component
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/index" component={TabBar} />
                        <Route path="/search" component={Search} />
                    </div>
                </Router>
            </div >
        );
    }
}
