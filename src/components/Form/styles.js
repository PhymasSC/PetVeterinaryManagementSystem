import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.form`
	${tw`bg-[#FFF] text-center rounded py-8 px-5 shadow-md max-w-xs`}
	& {
		input {
			${tw`outline-none border-primary-200 mb-4 w-full border-solid border rounded-md py-2 px-4`}
			${p => p.warn && tw`border-danger-500`}
		}

		input:focus {
			${tw`border-info-500`}
		}

		input:not(:placeholder-shown) {
			${tw`border-success-500`}
		}

		button {
			${tw`text-[#FFF] bg-[hsl(221, 81%, 54%)] hover:bg-info-400 font-bold py-2 px-8 border border-info-800 rounded-[999em]`}
		}
	}
`;

export default StyledForm;
