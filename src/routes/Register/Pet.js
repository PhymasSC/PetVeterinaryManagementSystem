import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { Input, Form, Button } from "../../components";
import Step from "../../components/Step";

const content = [
    { component: Input, content: "Pet Name" },
    { component: Input, content: "Pet Type" },
    { component: Input, content: "Age" },
    { component: Input, content: "Race" },
    { component: Input, content: "Gender" },
    { component: Input, content: "Colour" },
    { component: Input, content: "Date of Birth" },
    { component: Button, type: "submit", content: "Add another pet" },
    { component: Button, type: "submit", content: "Register" },
];

const SignUpComponent = () => {
    return (
        <div>
            <EditorLayout title="Pet Details">
                <Step />
                <Form
                    items={content}
                    action=""
                    method="post"
                    className="flex flex-col items-center py-4 w-full gap-2"
                />
            </EditorLayout>
        </div>
    );
};

export default SignUpComponent;
