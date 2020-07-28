import React from 'react';
import PrivateRoute from './PrivateRoute';
import {Route, BrowserRouter} from 'react-router-dom';
import Form from '../formsample/Form';

const AppRoute = (props) => {
    return (
        <BrowserRouter>
            <PrivateRoute path='/home' component={Form} exact/>
            <PrivateRoute path='/function' component={Form} exact/>
            <Route path='/login' component={Form} exact/>
        </BrowserRouter>
    )
}

export default AppRoute;