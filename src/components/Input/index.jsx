import React from "react";
import Input, { InputContainer, InputPlaceholder } from "./styles";

const InputComponent = (props, configuration) => {
    return (
        <InputContainer htmlFor={configuration.labelName || ""}>
            <Input
                className="peer"
                id={configuration.id}
                type={configuration.type || "text"}
                placeholder=" "
            />

            <InputPlaceholder className="peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                {props.children}
            </InputPlaceholder>
        </InputContainer>
    );
};

export default InputComponent;
