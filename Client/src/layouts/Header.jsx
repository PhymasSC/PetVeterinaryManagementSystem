import React from "react";
import { HeaderLayout, HeaderLayoutLogin } from "./styles";
import { Clock } from "../components";
import logo from "../assets/img/logo.png";

const Header = ({ title }) => {
    return (
        <HeaderLayout>
            <span className="title">{title}</span>
            <Clock />
        </HeaderLayout>
    );
};

const HeaderLoginRegis = ({ title }) => {
    return (
        // <HeaderLayoutLogin>
            <div className="flex justify-between m-0 p-0">
                <div className="flex justify-between ml-7 mt-5">
                    <img src={logo} width={90} height={70} />
                    <span className="font-medium text-2xl ml-5 pt-1">{title}</span>
                </div>
                <Clock />
            </div>
        // </HeaderLayoutLogin>
    );
};

export default Header;
export { HeaderLoginRegis };
