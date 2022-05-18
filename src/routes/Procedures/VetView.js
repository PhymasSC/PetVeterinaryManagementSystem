import React from "react";
import { StyledTableProcedure } from "../../components/Table";
import { Clock } from "../../components/index";
// import { Pencil } from "phosphor-react";

const Procedure = () => {
	return (
		<>
			<div>
				<h1>Manage Procedures</h1>
				<Clock />
			</div>
			{/* <div className="flex"> */}
			<div>
				<StyledTableProcedure />
			</div>
			{/* <div>
					<Pencil />
				</div> */}
			{/* </div> */}
		</>
	);
};

export default Procedure;
