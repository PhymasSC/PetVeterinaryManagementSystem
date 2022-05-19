import React from "react";
import { StyledTableAppointment } from "../../components/Table";
import Header from "../../layouts/Header";

const Appointment = () => {
    return (
        <>
            <Header title="Manage Appointment" />
			<StyledTableAppointment />
        </>
    );
};

export default Appointment;