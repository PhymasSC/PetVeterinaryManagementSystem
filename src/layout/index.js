import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
const Layout = () => {
	return (
		<>
			<SideBar>
				<Outlet />
			</SideBar>
		</>
	);
};

export default Layout;
