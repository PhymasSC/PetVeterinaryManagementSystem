import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "./../../utils/authApi.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return isLogin() ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
