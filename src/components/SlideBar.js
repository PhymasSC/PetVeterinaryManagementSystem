import logo from "./../assets/img/logo.png";
import appointment from "./../assets/img/calendar.svg";
import medicalRecord from "./../assets/img/tablet.svg";
import { House, Notebook, Book, Calendar } from "phosphor-react";
import "./../assets/styles.css";

export default function SlideBar() {
	return (
		<div className="h-screen w-[7%] bg-[#4ecdd5]">
			<img
				src={logo}
				alt="logo"
				draggable="false"
				className="px-4 py-4"
			/>
			<nav className="flex flex-col w-1/3 mt-20 h-1/2 justify-around items-center ">
				<House
					color="white"
					weight="duotone"
					size={28}
					alt="Homepage"
				/>
				<Calendar
					color="white"
					weight="duotone"
					size={28}
					alt="Appointment"
				/>
				<Notebook
					color="white"
					weight="duotone"
					size={28}
					alt="Appointment"
				/>
				<Book
					color="white"
					weight="duotone"
					size={28}
					alt="Medical record"
				/>
			</nav>
		</div>
	);
}
