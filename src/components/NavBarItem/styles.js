import styled from "styled-components";
import tw from "twin.macro";

const NavbarItem = styled.li`
    ${tw`flex w-full justify-between  hover:text-primary-700 cursor-pointer items-center mb-6`}

	
    & {
        a {
            ${tw`flex`}
        }
        .active {
            ${tw`text-primary-100`}
        }
        
        .badge {
            ${tw`ml-2 py-1 px-3 bg-primary-100 rounded-xl text-primary-500 hover:text-primary-900 flex items-center justify-center text-xs`}
        }

        div:first-child {
            ${tw`flex items-center`}
        }

        span {
            ${tw`text-sm  ml-2`}
        }
    }
`;

export default NavbarItem;
