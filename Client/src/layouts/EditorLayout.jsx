import React from "react";
import { Card } from "../components";
import { EditorLayout } from "./styles";
import Header from "./Header";
const Layout = (props) => {
    return (
        <EditorLayout>
            <Header title={props.title}></Header>
            <Card>{props.children}</Card>
        </EditorLayout>
    );
};

export default Layout;
