import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import Input from "../../components/Input";
import { Button, Form } from "../../components";

const formContents = [
    {
        component: Input,
        type: "text",
        content: "Pet Name",
    },
    {
        component: Input,
        type: "text",
        content: "Age",
    },
    {
        component: Input,
        type: "text",
        content: "Gender",
    },
    {
        component: Input,
        type: "text",
        content: "Core Curriculum Category",
    },
    {
        component: Input,
        type: "text",
        content: "Surgical Category",
    },
    {
        component: Input,
        type: "text",
        content: "Surgical Procedure",
    },
    {
        component: Input,
        type: "text",
        content: "Surgical Equipment",
    },
    {
        component: Input,
        type: "text",
        content: "Time",
    },
    {
        component: Input,
        type: "text",
        content: "Date",
    },
    {
        component: Button,
        type: "submit",
        value: "Submit",
        content: "Submit",
    },
];

const FormEditProcedures = () => {
    return (
        <EditorLayout title="Edit">
            <Form
                items={formContents}
                action=""
                method="POST"
                className="flex flex-col items-center py-4 w-full gap-2"
            />
        </EditorLayout>
    );
};

export default FormEditProcedures;
