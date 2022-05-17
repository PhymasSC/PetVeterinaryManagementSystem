import React from "react";
import Clock from "../components/Clock";
import { EditorLayout } from "./styles";
const Layout = props => {
	return (
		<EditorLayout>
			<div className="header">
				<h1 className="title">{props.title}</h1>
				<Clock />
			</div>
			<div className="container">{props.children}</div>
		</EditorLayout>
	);
};

export default Layout;
