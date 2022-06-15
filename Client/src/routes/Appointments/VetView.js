import React from "react";
import { StyledTableAppointment } from "../../components/Table";
import EditorLayout from "../../layouts/EditorLayout";

const Appointment = () => {
    return (
        <>
            <EditorLayout title="Appointment">
                <StyledTableAppointment />
            </EditorLayout>
        </>
    );
};

export default Appointment;
