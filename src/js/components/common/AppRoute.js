import React from 'react';
import PrivateRoute from './PrivateRoute';
import {Route, BrowserRouter} from 'react-router-dom';
import Form from '../formsample/Form';
import Article from '../article/Article';
import Post from '../post/Post';

const AppRoute = (props) => {
    return (
        <BrowserRouter>
            <PrivateRoute path='/home' component={Form} exact/>
            <PrivateRoute path='/function' component={Form} exact/>
            <Route path='/' component={Form} exact/>
            <Route path='/article' component={Article} exact/>
            <Route path='/post' component={Post} exact/>
        </BrowserRouter>
    )
}

export default AppRoute;