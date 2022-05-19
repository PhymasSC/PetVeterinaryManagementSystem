import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { Input, Form, Button } from "./../../components";

const content = [
    { component: Input, content: "Userame" },
    { component: Input, content: "Password" },
    { component: Button, type: "submit", content: "Log in" },
];

const SignIn = () => {
    return (
        <>
            <EditorLayout title="Login">
                <Form
                    items={content}
                    action=""
                    method="post"
                    className="flex flex-col items-center py-4 w-full gap-2"
                />
            </EditorLayout>
        </>
    );
};

export default SignIn;
