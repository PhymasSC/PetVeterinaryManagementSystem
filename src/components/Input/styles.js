import styled from "styled-components";
import tw from "twin.macro";

const InputStyle = styled.input`
    ${tw`rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300 outline-none hover:border-primary-500 focus:border-primary-500`}
`;

export default InputStyle;
