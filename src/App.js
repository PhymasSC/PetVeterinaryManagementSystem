import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Blogs from "./routers/Blogs";
import CreateMedicalRecord from "./routers/CreateMedicalRecord";
import FormEditProcedures from "./routers/FormEditProcedures";
import Home from "./routers/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="mr" element={<CreateMedicalRecord />} />
					<Route path="p" element={<FormEditProcedures />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
