import React from "react";
import { Card } from "../components";
import { EditorLayout, EditorLayoutLoginRegis } from "./styles";
import Header from "./Header";
import { HeaderLoginRegis } from "./Header";
const Layout = props => {
    return (
        <EditorLayout>
            <Header title={props.title}></Header>
            <Card>{props.children}</Card>
        </EditorLayout>
    );
};

const LayoutLoginRegis = props => {
    return (
        <EditorLayoutLoginRegis>
            <HeaderLoginRegis title={props.title}></HeaderLoginRegis>
            {props.children}
        </EditorLayoutLoginRegis>
    );
};
export default Layout;
export { LayoutLoginRegis };
