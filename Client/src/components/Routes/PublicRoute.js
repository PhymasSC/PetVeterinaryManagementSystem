import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLogin } from './../../utils/authApi.js';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Navigate to="/Home" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;