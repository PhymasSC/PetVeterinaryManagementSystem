import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import {
    Appointment,
    Procedure,
    CreateProcedure,
    MedicalRecord,
    MedicalVet,
    MedicalClient,
    ProcedureVet,
    AppointmentVet,
    Dashboard,
    Job,
    SignIn,
    SignUp,
} from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="medical-records">
                        <Route index element={<MedicalRecord />} />
                        <Route path="view-vet" element={<MedicalVet />} />
                        <Route path="view-client" element={<MedicalClient />} />
                    </Route>
                    <Route path="procedures">
                        <Route index element={<Procedure />} />
                        <Route path="new" element={<CreateProcedure />} />
                        <Route path="view-vet" element={<ProcedureVet />} />
                    </Route>
                    <Route path="appointments">
                        <Route index element={<Appointment />} />
                        <Route path="view-vet" element={<AppointmentVet />} />
                    </Route>
                    <Route path="job" element={<Job />} />
                    <Route path="login" element={<SignIn />} />
                    <Route path="register" element={<SignUp />} />
                    <Route path="*" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
