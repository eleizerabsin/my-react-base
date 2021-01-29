import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/redux/store/index";
import App from './js/components/App';
import service from './js/api/axios-middleware';

<<<<<<< HEAD
<<<<<<< HEAD
// new rebase test

// new test

=======
// sample brance rebase test 1
>>>>>>> update
=======
// sample brance rebase test 1
>>>>>>> ee92c2daea8bcec82bb13160497bfb4b81d9a9aa
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