import React from "react";
import StyledTableMedical from "../../components/Table";
import EditorLayout from "../../layouts/EditorLayout";

const MedicalRecord = () => {
    return (
        <>
            <EditorLayout title="Medical Record">
                <StyledTableMedical />
            </EditorLayout>
        </>
    );
};

export default MedicalRecord;
