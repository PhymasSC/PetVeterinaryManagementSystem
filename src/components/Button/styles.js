import styled from "styled-components";
import tw from "twin.macro";

const PrimaryButton = styled.button`
	${tw`inline-flex items-center px-8 py-3 text-white bg-primary-500 border border-primary-500 rounded hover:bg-transparent hover:text-primary-500 active:text-primary-500 focus:outline-none focus:ring`}
`;

const AccentButton = styled.button`
	${tw`inline-flex items-center px-8 py-3 text-primary-500 border border-primary-500 rounded hover:bg-primary-500 hover:text-white active:bg-primary-500 focus:outline-none focus:ring`}
`;

export default PrimaryButton;

export { AccentButton };
