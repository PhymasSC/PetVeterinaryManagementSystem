import styled from "styled-components";
import tw from "twin.macro";

const DefaultLayout = styled.div``;

const EditorLayout = styled.div`
    & {
        .container {
            ${tw`flex justify-center items-center bg-white rounded-xl w-[90%] h-full m-auto px-10`}
        }
    }
`;

const HeaderLayout = styled.div`
    ${tw`flex justify-between mb-10`}

    & {
        .title {
            ${tw`font-medium text-2xl ml-10`}
        }
    }
`;
export default DefaultLayout;

export { EditorLayout, HeaderLayout };
