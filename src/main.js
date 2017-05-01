import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
// import route from './router/route';

require('normalize.css');

require('./config/match.js');

// 使用mock.js拦截ajax请求
if (process.env.NODE_ENV !== 'production') {
    require('./mocks/index.js');
}

// import { Router, Route, Switch } from 'react-router';

ReactDom.render(
    <App />,
    document.getElementById('app'),
);
