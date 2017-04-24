import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
require('normalize.css');
// import { Router, Route, Switch } from 'react-router';

ReactDom.render(
    <App />,
    document.getElementById('app'),
);
