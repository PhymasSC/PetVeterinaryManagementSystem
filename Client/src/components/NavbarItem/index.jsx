import React from "react";
import { NavLink } from "react-router-dom";
import NavbarItem from "./styles";

const NavbarItemComponent = ({ items }) => {
    return (
        <NavbarItem>
            <NavLink to={items.location}>
                <div>
                    {items.icon}
                    <span>{items.name}</span>
                </div>
                <div className="badge">{items.notificationCount}</div>
            </NavLink>
        </NavbarItem>
    );
};

export default NavbarItemComponent;
