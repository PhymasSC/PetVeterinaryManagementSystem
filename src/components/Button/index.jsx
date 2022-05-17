import React from "react";
import PrimaryButton, { AccentButton } from "./styles";

const PrimaryButtonComponent = props => {
	return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
};
// <PrimaryButtonComponent>ABJKBCAJKDC</PrimaryButtonComponent>

const SecondaryButtonComponent = ({ label, key }) => {
	return <AccentButton>{label}</AccentButton>;
};
// <SecondaryButtonComponent label="ABCBAJCK" key="ABC"/>

const TertiaryButtonComponent = props => {
	const { children, key1, ...rest } = props;

	return (
		<>
			<h1>{key1}</h1>
			<button {...rest}> {props.children}</button>
		</>
	);
};
export default PrimaryButtonComponent;
// import ABC from "./../Button"
export { SecondaryButtonComponent, TertiaryButtonComponent };
// import { SecondaryButtonComponent as ABC} from "./../Button"
