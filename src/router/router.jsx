/* import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import index from '../Component/index'; // 销售录入

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const hero = (location, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Component/HeroHead').default);
    }, 'hero');
};

const raider = (location, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Component/raiders/raiders').default);
    }, 'raider');
};

const recommend = (location, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Component/recommend/recommend').default);
    }, 'recommend');
};

const video = (location, cb) => {
    require.ensure([], (require) => {
        cb(null, require('../Component/video/video').default);
    }, 'video');
};

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={index} />
            <Route path="index" component={index} />
            <Route path="hero" getComponent={hero} />
            <Route path="raider" getComponent={raider} />
            <Route path="recommend" getComponent={recommend} />
            <Route path="video" getComponent={video} />
            <Redirect from="*" to="/" />
        </Route>
    </Router>
);

export default RouteConfig;*/
