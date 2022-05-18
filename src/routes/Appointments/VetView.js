import React from "react";
import { StyledTableAppointment } from "../../components/Table";
import { Clock } from "../../components/index";

const Appointment = () => {
    return (
        <>
            <div>
				<h1>Manage Appointment</h1>
				<Clock />
			</div>
			<div>
				<StyledTableAppointment />
			</div>
        </>
    );
};

export default Appointment;