import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Blogs from "./routes/Blogs";
import MedicalRecord from "./routes/MedicalRecord";
import FormEditProcedures from "./routes/FormEditProcedures";
import Home from "./routes/Home";
import MedicalRecordOutputVet from "./routes/MedicalRecordOutputVet";
import ProcedureOutputVet from "./routes/ProcedureOutputVet";
import AppointmentOutputVet from "./routes/AppointmentOutputVet";
import MediaclRecordOutputClient from "./routes/MedicalRecordOutputClient";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="mr" element={<MedicalRecord />} />
					<Route path="p" element={<FormEditProcedures />} />
					<Route path="*" element={<Home />} />
					<Route path="r" element={<MedicalRecordOutputVet />} />
					<Route path="pro" element={<ProcedureOutputVet />} />
					<Route path="ap" element={<AppointmentOutputVet />} />
					<Route path="rc" element={<MediaclRecordOutputClient />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
