import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'lib-flexible';
import { createStore } from 'redux';
import App from './App';
import reducer from './redux/reducer.js';

require('normalize.css');
// require('./config/match.js');

// // 使用mock.js拦截ajax请求
// // if (process.env.NODE_ENV !== 'production') {
// //     require('./mocks/index.js');
// // }


const store = createStore(reducer);
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
