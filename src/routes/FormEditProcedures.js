import React from "react";
import { Clock } from "../components/index";
const FormEditProcedures = () => {
	return (
		<div className=" w-[93%]">
			<div className="flex justify-between">
				<h1 className="font-medium text-2xl ml-10 pt-12 pb-10">
					Edit Procedure
				</h1>
				<input type="datetime-local" className="bg-teal-50 mr-10" />
				<Clock/>
			</div>
			<div className="bg-white rounded-xl w-[80%] m-auto">
				<form action="get" className="flex flex-col items-center py-12">
					<div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Pet Name
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>
					<div>
						<button
							type="submit"
							className="bg-cyan-100 px-32 py-3 rounded-xl"
						>
							EDIT
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormEditProcedures;
