import React, { useState } from "react";
import logo from "./../../assets/img/logo.png";
import { House, Notebook, Book, Calendar } from "phosphor-react";
import { Link } from "react-router-dom";
import NavbarItem from "../NavbarItem/styles";

const SidebarComponent = props => {
	const [isMenuOn, setIsMenuOn] = useState(false);

	return (
		<div className="flex flex-no-wrap">
			{/* Sidebar starts */}
			{/* PC view */}
			<div className="w-64 sticky bg-primary-500 shadow flex-col justify-between hidden sm:flex">
				<div className="px-8">
					<div className="h-16 w-full flex justify-center items-center">
						<img src={logo} />
					</div>
					<ul className="mt-12">
						<NavbarItem active>
							<div>
								<House
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Homepage"
								/>
								<Link to="/">Dashboard</Link>
							</div>
							<div>5</div>
						</NavbarItem>
						<NavbarItem>
							<div>
								<Calendar
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Appointment"
								/>
								<Link to="/app">Appointment</Link>
							</div>
							<div>5</div>
						</NavbarItem>
						<NavbarItem>
							<div>
								<Notebook
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Medical Record"
								/>
								<Link to="/mr">Medical Record</Link>
							</div>
							<div>5</div>
						</NavbarItem>
						<NavbarItem>
							<div>
								<Book
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Medical record"
								/>
								<span>Medical record</span>
							</div>
							<div>5</div>
						</NavbarItem>
					</ul>
				</div>
			</div>
			{/* Mobile view */}
			<div className="w-64 z-40 absolute  bg-primary-500 shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out">
				<div
					className="h-10 w-10 top-0 bottom-0 bg-primary-500 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
					onClick={() => setIsMenuOn(!isMenuOn)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-adjustments"
						width={20}
						height={20}
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#FFFFFF"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<circle cx={6} cy={10} r={2} />
						<line x1={6} y1={4} x2={6} y2={8} />
						<line x1={6} y1={12} x2={6} y2={20} />
						<circle cx={12} cy={16} r={2} />
						<line x1={12} y1={4} x2={12} y2={14} />
						<line x1={12} y1={18} x2={12} y2={20} />
						<circle cx={18} cy={7} r={2} />
						<line x1={18} y1={4} x2={18} y2={5} />
						<line x1={18} y1={9} x2={18} y2={20} />
					</svg>
				</div>
				{/* {isMenuOn && ( */}
				<div className="px-8">
					<div className="h-16 w-full flex justify-center items-center">
						<img src={logo} />
					</div>
					<ul className="mt-12">
						<NavbarItem active>
							<div>
								<House
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Homepage"
								/>
								<Link to="/">Dashboard</Link>
							</div>
							<div>5</div>
						</NavbarItem>
						<NavbarItem>
							<div>
								<Calendar
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Appointment"
								/>
								<Link to="/app">Appointment</Link>
							</div>
							<div>5</div>
						</NavbarItem>
						<NavbarItem>
							<div>
								<Notebook
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Medical Record"
								/>
								<Link to="/mr">Medical Record</Link>
							</div>
							<div>5</div>
						</NavbarItem>
						<NavbarItem>
							<div>
								<Book
									color="currentColor"
									weight="duotone"
									size={20}
									alt="Medical record"
								/>
								<span>Medical record</span>
							</div>
							<div>5</div>
						</NavbarItem>
					</ul>
				</div>
				{/* )} */}
			</div>
			{/* Sidebar ends */}
			<div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
				{props.children}
			</div>
		</div>
	);
};

export default SidebarComponent;
