import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
    // add function  to check user authentication
    let isAuthenticated = true;

    if (isAuthenticated) {
        return <Route path={props.path} component={props.component} exact={props.exact}/>
    }

    // if authentication is false, redirect to login screen
    return <Redirect to="/login"/>
}

export default PrivateRoute;