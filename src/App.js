import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Blogs from "./routes/Blogs";
import MedicalRecord from "./routes/MedicalRecord";
import FormEditProcedures from "./routes/FormEditProcedures";
import Home from "./routes/Home";

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
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
