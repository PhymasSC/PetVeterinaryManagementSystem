import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./layouts";
import {
    Appointment,
    Procedure,
    Home,
    MedicalRecord,
    MedicalVet,
    MedicalClient,
    ProcedureVet,
    AppointmentVet,
} from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route name="Dashboard" path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="appointments" element={<Appointment />} />
                    <Route path="medical-records" element={<MedicalRecord />} />
                    <Route path="procedures" element={<Procedure />} />
                    <Route path="r" element={<MedicalVet />} />
                    <Route path="pro" element={<ProcedureVet />} />
                    <Route path="ap" element={<AppointmentVet />} />
                    <Route path="rc" element={<MedicalClient />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
