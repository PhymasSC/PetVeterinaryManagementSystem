import React, { useState } from "react";
import logo from "./../../assets/img/logo.png";
import { House, Notebook, Book, Calendar } from "phosphor-react";
import { Link } from "react-router-dom";
import NavbarItem from "../NavbarItem";

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
        notificationCount: 5,
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
        notificationCount: 5,
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
        notificationCount: 5,
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
        notificationCount: 5,
    },
];

const SidebarComponent = props => {
    const [isMenuOn, setIsMenuOn] = useState(false);

    return (
        <>
            <div class="flex h-screen overflow-hidden rounded-lg bg-primary-500">
                <div class="hidden md:flex md:flex-shrink-0">
                    <div class="flex w-64 flex-col">
                        <div class="flex flex-grow flex-col overflow-y-auto border-r border-primary-400 bg-primary-500 pt-5">
                            <div class="flex flex-shrink-0 flex-col items-center px-4">
                                <Link to="/">
                                    <div className="h-16 w-full flex justify-center items-center">
                                        <img src={logo} />
                                    </div>
                                </Link>
                                <button class="focus:shadow-outline hidden rounded-lg focus:outline-none">
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

                            <div class="mt-5 flex flex-grow flex-col px-4">
                                <nav class="flex-1 space-y-1 bg-primary-500">
                                    <ul className="mt-12">
                                        {navbar.map(nav => {
                                            return <NavbarItem items={nav} />;
                                        })}
                                    </ul>
                                </nav>
                            </div>
                            <div class="flex flex-shrink-0 bg-primary-500 p-4 px-4">
                                <Link to="/">
                                    <div class="flex items-center">
                                        <div>
                                            <img
                                                class="inline-block h-9 w-9 rounded-full"
                                                src="https://images.pexels.com/photos/6966591/pexels-photo-6966591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                alt=""
                                            />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-sm font-medium text-gray-900">
                                                @Venice Clinic
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-0 flex-1 flex-col overflow-hidden bg-teal-50">
                    <main class="relative flex-1 overflow-y-auto focus:outline-none">
                        <div class="py-6">
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <h1 class="text-lg text-neutral-600">
                                    {props.title}
                                </h1>
                            </div>
                            <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
                                <div class="py-4">
                                    <div class="h-96 rounded-lg">
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
