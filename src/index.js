import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App'
import View from './components/View'
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
        <View/>
    </Provider>,
    document.getElementById("root")
);
