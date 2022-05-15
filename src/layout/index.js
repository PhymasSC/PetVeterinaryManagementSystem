import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Layout = () => {
	return (
		<>
			<SideBar content={<Outlet />} />
		</>
	);
};

export default Layout;
