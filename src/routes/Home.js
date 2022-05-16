import React from "react";
import Button, {
	SecondaryButtonComponent as SecondaryButton,
	TertiaryButtonComponent as TertiaryButton
} from "../components/Button";
import PrimaryButton from "../components/Button/styles";
import { MagnifyingGlass } from "phosphor-react";
const Home = () => {
	return (
		<>
			This is homepage
			<TertiaryButton type="submit" key1="Hello">
				Abc
			</TertiaryButton>
			<PrimaryButton>
				<div>ABC</div>
				<div>ABC</div>
				<div>ABC</div>
			</PrimaryButton>
			<Button>Hello</Button>		
			<MagnifyingGlass size={128}/>
		</>
	);
};

export default Home;
