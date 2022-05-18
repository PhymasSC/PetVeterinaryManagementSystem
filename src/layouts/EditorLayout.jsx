import React from "react";
import Clock from "../components/Clock";
import { EditorLayout } from "./styles";
import Header from "./Header";
const Layout = (props) => {
    return (
        <EditorLayout>
            <Header title={props.title}></Header>
            <div className="container">{props.children}</div>
        </EditorLayout>
    );
};

export default Layout;
