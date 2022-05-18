import React from "react";
import { StyledTableRecord } from "../components/Table";
import { Clock } from "../components/index";

const MedicalRecord = () => {
	return (
		<>
			<div>
				<h1>Medical Record</h1>
				<Clock />
			</div>
			{/* <div className="flex"> */}
			<div>
				<StyledTableRecord />
			</div>
			{/* <div>
					<Pencil />
				</div> */}
			{/* </div> */}
		</>
	);
};

export default MedicalRecord;