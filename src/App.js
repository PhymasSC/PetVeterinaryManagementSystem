import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import {
    Appointment,
    Procedure,
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
                    <Route path="appointments" element={<Appointment />} />
                    <Route path="medical-records" element={<MedicalRecord />} />
                    <Route path="procedures" element={<Procedure />} />
                    <Route path="r" element={<MedicalVet />} />
                    <Route path="pro" element={<ProcedureVet />} />
                    <Route path="ap" element={<AppointmentVet />} />
                    <Route path="rc" element={<MedicalClient />} />
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
