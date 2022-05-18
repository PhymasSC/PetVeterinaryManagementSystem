import React from "react";
import { v4 as UUIDv4 } from "uuid";

const Form = (props) => {
    const { items, action, method, ...rest } = props;
    const generateElement = (item) => {
        const { component, content, ...rest } = item;
        const Component = component;
        return (
            <Component id={UUIDv4()} {...rest}>
                {content}
            </Component>
        );
    };

    return (
        <form action={action} method={method} {...rest}>
            {items && items.map((item) => generateElement(item))}
        </form>
    );
};

export default Form;
