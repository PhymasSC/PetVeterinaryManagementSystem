import React from "react";
import { InputContainer, InputPlaceholder } from "./styles";

const InputComponent = (props, configuration) => {
    const { children, id, ...rest } = props;
    console.log(rest);
    return (
        <InputContainer htmlFor={configuration.labelName || ""}>
            <input
                className="peer"
                id={id}
                type={configuration.type || "text"}
                placeholder=" "
                {...rest}
            />

            <InputPlaceholder className="peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm">
                {children}
            </InputPlaceholder>
        </InputContainer>
    );
};

export default InputComponent;
