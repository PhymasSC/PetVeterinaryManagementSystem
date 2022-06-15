import styled from "styled-components";
import tw from "twin.macro";

const StyledTable = styled.div`
	${tw`overflow-x-auto outline-none bg-white rounded`}
	& {
		table {
			${tw`min-w-full text-sm divide-y divide-gray-200`}
		}

		th {
			${tw`p-4 font-medium text-left text-gray-900 whitespace-nowrap`}
		}

		input {
			${tw`w-5 h-5 border-gray-200 rounded`}
		}

		div {
			${tw`flex items-center`}
		}

		tbody {
			${tw`divide-y divide-gray-100 border-none`}
		}

		td {
			${tw`p-4 text-gray-700 whitespace-nowrap`}
		}

		tr {
			${tw`border-none`}
		}

		label {
			${tw`text-[10px] text-gray-400`}
		}
	}
`;

export default StyledTable;
