import React from "react";
import { StyledTableRecord } from "../../components/Table";
import EditorLayout from "../../layouts/EditorLayout";

const MedicalRecord = () => {
    return (
        <>
            <EditorLayout title="Medical Record">
                <StyledTableRecord />
            </EditorLayout>
        </>
    );
};

export default MedicalRecord;
