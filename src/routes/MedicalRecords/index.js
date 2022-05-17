import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import PrimaryButton from "../../components/Button";
const CreateMedicalRecord = () => {
	return (
		<EditorLayout title="Edit">
			<form method="POST" className="flex flex-col items-center py-12">
				<div className="pb-10">
					<tr>
						<th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
							Client
						</th>
						<td>
							<select
								id="clientName"
								name="clientName"
								className="rounded-lg w-[20rem] md:w-[30em] md:px-1 lg:w-[40em] h-10 px-2 border-2 border-gray-300"
							>
								<option
									value="none"
									className=""
									selected
									disabled
								>
									Client
								</option>
								<option value="Tan Yi Han">Tan Yi Han</option>
								<option value="Alan Leong">Alan Leong</option>
							</select>
						</td>
					</tr>
				</div>

				<div>
					<PrimaryButton
						type="submit"
						className="bg-cyan-100 px-32 py-3 rounded-xl"
					>
						CREATE
					</PrimaryButton>
				</div>
			</form>
		</EditorLayout>
	);
};

export default CreateMedicalRecord;
