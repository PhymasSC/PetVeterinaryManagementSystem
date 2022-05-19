import React from "react";
import { StyledTableProcedure } from "../../components/Table";
import Header from "../../layouts/Header";
// import { Pencil } from "phosphor-react";

const Procedure = () => {
	return (
		<>
			<Header title="Manage Procedure" />
			{/* <div className="flex"> */}
				<StyledTableProcedure />
			{/* <div>
					<Pencil />
				</div> */}
			{/* </div> */}
		</>
	);
};

export default Procedure;
