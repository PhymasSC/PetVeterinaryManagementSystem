import React from "react";
import PrimaryButton, { AccentButton } from "./styles";

const PrimaryButtonComponent = ({ label }) => {
	return <PrimaryButton>{label}</PrimaryButton>;
};


const SecondaryButtonComponent = ({ label }) => {
	return <AccentButton>{label}</AccentButton>;
};

export default PrimaryButtonComponent;

export { SecondaryButtonComponent };
