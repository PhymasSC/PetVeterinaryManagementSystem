import React from "react";
import logo from "./../assets/img/logo.png";
import "./../assets/styles/index.css";

export function SlideBar() {
	return (
		<div className="h-screen w-[5em] bg-[#4ecdd5]">
			<img
				src={logo}
				alt="logo"
				draggable="false"
				className="px-2 py-4"
			/>
		</div>
	);
}
