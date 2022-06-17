import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLogin } from "./../../utils/authApi.js";

const PublicRoute = ({ restricted }) => {
    console.log(JSON.parse(localStorage.getItem("user")));
    return isLogin() && restricted ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
