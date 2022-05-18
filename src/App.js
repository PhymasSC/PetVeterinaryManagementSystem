import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./layouts";
import { Appointment, Procedure, Home, MedicalRecord, MedicalRecordOutputVet, ProcedureOutputVet, AppointmentOutputVet, MediacalRecordOutputClient } from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route name="Dashboard" path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="appointments" element={<Appointment />} />
                    <Route path="medical-records" element={<MedicalRecord />} />
                    <Route path="procedures" element={<Procedure />} />
                    <Route path="*" element={<Home />} />
					<Route path="r" element={<MedicalRecordOutputVet />} />
					<Route path="pro" element={<ProcedureOutputVet />} />
					<Route path="ap" element={<AppointmentOutputVet />} />
					<Route path="rc" element={<MediacalRecordOutputClient />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
