import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import {
    Procedure,
    CreateProcedure,
    MedicalRecord,
    MedicalEdit,
    MedicalVet,
    MedicalClient,
    ProcedureVet,
    AppointmentVet,
    Dashboard,
    Job,
    Pet,
    SignIn,
    SignUp,
} from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<SignIn />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/home">
                        <Route index element={<Dashboard />} />
                    </Route>
                    <Route path="medical-records">
                        <Route index element={<MedicalRecord />} />
                        <Route path="view-vet" element={<MedicalVet />} />
                        <Route path="view-client" element={<MedicalClient />} />
                        {/* <Route path="edit-md" element={<MedicalEdit />} /> */}
                    </Route>
                    <Route path="procedures">
                        <Route index element={<Procedure />} />
                        <Route path="new" element={<CreateProcedure />} />
                        <Route path="view-vet" element={<ProcedureVet />} />
                    </Route>
                    <Route path="appointments">
                        <Route index element={<AppointmentVet />} />
                    </Route>
                    {/* <Route path="*" element={<Dashboard />} /> */}
                </Route>
                <Route path="login" element={<SignIn />} />
                <Route path="register">
                    <Route index element={<SignUp />} />
                    <Route path="job" element={<Job />} />
                    <Route path="pet" element={<Pet />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
