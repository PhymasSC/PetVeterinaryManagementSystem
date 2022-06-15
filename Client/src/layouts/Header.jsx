import React from "react";
import { HeaderLayout } from "./styles";
import { Clock } from "../components";
const Header = ({ title }) => {
    return (
        <HeaderLayout>
            <span className="title">{title}</span>
            <Clock />
        </HeaderLayout>
    );
};

export default Header;
