import React, { useState } from "react";
import logo from "./../../assets/img/logo.png";
import { House, Notebook, Book, Calendar } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import NavbarItem from "../NavbarItem";
import PrimaryButton from "../Button/styles";

const navbar = [
    {
        location: "/",
        icon: (
            <House
                color="currentColor"
                weight="duotone"
                size={20}
                alt="Homepage"
            />
        ),
        name: "Dashboard",
    },
    {
        location: "/appointments",
        icon: (
            <Calendar
                color="currentColor"
                weight="duotone"
                size={20}
                alt="Appointment"
            />
        ),
        name: "Appointment",
    },
    {
        location: "/medical-records",
        icon: (
            <Notebook
                color="currentColor"
                weight="duotone"
                size={20}
                alt="Medical Record"
            />
        ),
        name: "Medical Record",
    },
    {
        location: "/procedures",
        icon: (
            <Book
                color="currentColor"
                weight="duotone"
                size={20}
                alt="Procedure"
            />
        ),
        name: "Procedure",
    },
];

const SidebarComponent = props => {
    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.removeItem("user");
        navigate("/auth/login");
    };
    return (
        <>
            <div className="flex h-screen overflow-hidden rounded-lg bg-primary-500">
                <div className="hidden md:flex md:flex-shrink-0">
                    <div className="flex w-64 flex-col">
                        <div className="flex flex-grow flex-col overflow-y-auto border-r border-primary-400 bg-primary-500 pt-5">
                            <div className="flex flex-shrink-0 flex-col items-center px-4">
                                <Link to="/">
                                    <div className="h-16 w-full flex justify-center items-center">
                                        <img src={logo} />
                                    </div>
                                </Link>
                                <button className="focus:shadow-outline hidden rounded-lg focus:outline-none">
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        class="h-6 w-6"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                            clip-rule="evenodd"
                                        ></path>
                                        <path
                                            fill-rule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-5 flex flex-grow flex-col px-4">
                                <nav className="flex-1 space-y-1 bg-primary-500">
                                    <ul className="mt-12">
                                        {navbar.map(nav => {
                                            return <NavbarItem items={nav} />;
                                        })}
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 bg-primary-500 p-4 px-4">
                                <Link to="/">
                                    <div className="flex items-center">
                                        <div className="dropdown dropdown-top">
                                            <label
                                                tabindex="0"
                                                className="cursor-pointer mt-6"
                                            >
                                                <img
                                                    className="inline-block h-9 w-9 rounded-full"
                                                    src="https://images.pexels.com/photos/6966591/pexels-photo-6966591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                    alt=""
                                                />
                                            </label>
                                            <ul
                                                tabindex="0"
                                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 "
                                            >
                                                <li>
                                                    <PrimaryButton
                                                        onClick={logoutHandler}
                                                    >
                                                        Logout
                                                    </PrimaryButton>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                @Venice Clinic
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-0 flex-1 flex-col overflow-hidden bg-teal-50">
                    <main className="relative flex-1 overflow-y-auto focus:outline-none">
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <h1 className="text-lg text-neutral-600">
                                    {props.title}
                                </h1>
                            </div>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
                                <div className="py-4">
                                    <div className="h-96 rounded-lg">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default SidebarComponent;
