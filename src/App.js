import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Blogs from "./routes/Blogs";
import CreateMedicalRecord from "./routes/CreateMedicalRecord";
import FormEditProcedures from "./routes/FormEditProcedures";
import Home from "./routes/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="mr" element={<CreateMedicalRecord />} />
					<Route path="p" element={<FormEditProcedures />} />
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
