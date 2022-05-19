import React from "react";
import { StyledFormLogin } from "../../components/Form";
import Header from "../../layouts/Header";
import Input from "../../components/Input";
import { Button } from "../../components";
import PrimaryButton from "../../components/Button";

const SignIn = () => {
    return (
        <>
            <Header />
            <StyledFormLogin/>
            <PrimaryButton type="submit">Log in</PrimaryButton>
        </>
    );
};

export default SignIn;
