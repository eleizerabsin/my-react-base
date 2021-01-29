import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/redux/store/index";
import App from './js/components/App';
import service from './js/api/axios-middleware';

// sample brance rebase test 1
window.store = store;

// new test
// rebase new test
// sample branch rebase
// rebase
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);