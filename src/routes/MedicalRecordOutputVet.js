import React from "react";
import Record from "../components/Table";
import { Clock } from "../components/index";

const MedicalRecord = () => {
	return (
		<>
			<div>
				<h1>Manage Medical Records</h1>
				<Clock />
			</div>
			<Record />
		</>
	);
};

export default MedicalRecord;
