import React from "react";
import { StyledTableProcedure } from "../../components/Table";
import EditorLayout from "../../layouts/Header";

const Procedure = () => {
    return (
        <>
            <EditorLayout title="Procedure">
                <StyledTableProcedure />
            </EditorLayout>
        </>
    );
};

export default Procedure;
