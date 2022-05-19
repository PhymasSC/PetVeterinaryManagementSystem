import React from "react";
import { StyledTableRecord } from "../../components/Table";
import Header from "../../layouts/Header";

const MedicalRecord = () => {
    return (
        <>
            <Header title="Medical Record" />
            {/* <div className="flex"> */}
            <StyledTableRecord />
            {/* <div>
					<Pencil />
				</div> */}
            {/* </div> */}
        </>
    );
};

export default MedicalRecord;
