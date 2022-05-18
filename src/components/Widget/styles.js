import styled from "styled-components";
import tw from "twin.macro";

const CardStyles = styled.div`
    ${tw`w-full mx-auto my-4 bg-white shadow-md rounded-xl p-8`}

    & {
        .header {
            ${tw`mb-12 text-sm font-semibold tracking-widest text-primary-700 uppercase`}
        }
    }
`;

export default CardStyles;
