import React from "react";
import Record from "../../components/Table";
import EditorLayout from "../../layouts/EditorLayout";

const MedicalRecord = () => {
    return (
        <>
            <EditorLayout title="Medical Record">
                <Record />
            </EditorLayout>
        </>
    );
};

export default MedicalRecord;
