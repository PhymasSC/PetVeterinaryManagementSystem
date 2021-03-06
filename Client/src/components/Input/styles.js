import styled from "styled-components";
import tw from "twin.macro";

const InputContainer = styled.label`
    ${tw`relative block w-full p-3 border-2 border-gray-200 rounded-lg`}
    & {
        input {
            ${tw`w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 outline-none`}
        }
    }
`;

const InputPlaceholder = styled.span`
    ${tw`absolute text-xs font-medium text-gray-500 transition-all left-3 pointer-events-none`}
`;

export { InputContainer, InputPlaceholder };
