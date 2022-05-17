import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { Clock } from "../../components/index";
const FormEditProcedures = () => {
	return (
		<EditorLayout title="Edit">
				<form
					action=""
					method="POST"
					className="flex flex-col items-center py-12"
				>
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
		</EditorLayout>
	);
};

export default FormEditProcedures;
