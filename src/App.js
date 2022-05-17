import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from "./layouts";
import { Appointment, Procedure, Home, MedicalRecord } from "./routes";

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
