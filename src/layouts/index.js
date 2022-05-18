import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
const Layout = ({title}) => {
	return (
		<>
			<SideBar title={title}>
				<Outlet />
			</SideBar>
		</>
	);
};

export default Layout;
