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

const EditorLayoutLoginRegis = styled.div`
    ${tw``}
    & {
        .container {
            ${tw`flex justify-center items-center rounded-xl w-[90%] h-full m-auto px-10`}
        }
    }
`;

const HeaderLayout = styled.div`
    ${tw`flex justify-between mb-10`}

    & {
        .title {
            ${tw`font-medium text-2xl ml-7`}
        }
    }
`;

// const HeaderLayoutLoginRegis = styled.div`
//     ${tw`flex justify-between`}

//     & {
//         .container {
//             ${tw`flex justify-between m-0 p-0`}
//         }

//         .layout {
//             ${tw`flex justify-between ml-7 mt-7`}
//         }

//         .title {
//             ${tw`font-medium text-2xl ml-5 pt-2`}
//         }
//     }
// `;

export default DefaultLayout;

export { EditorLayout, HeaderLayout, EditorLayoutLoginRegis };
