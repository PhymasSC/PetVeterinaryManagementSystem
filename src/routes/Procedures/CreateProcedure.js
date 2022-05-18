import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { Clock } from "../../components/index";

const FormCreateProcedures = () => {
	return (
        <div>
		<EditorLayout title="Procedure">
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
                    </form>

					<div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Age
							</th>
							<td>
								<input
									type="number"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Gender
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Core Curriculum Category
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Surgical Category
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Surgical Procedure
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Surgical Equipment
							</th>
							<td>
								<input
									type="text"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Time
							</th>
							<td>
                            <form action="/action_page.php">
                            <label for="appt">Select a time:</label>
                            <input type="time" 
                            id="appt" 
                            name="appt"
                            />
                            </form>
							</td>
						</tr>
					</div>

                    <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Date
							</th>
							<td>
                            <label for="start">Start date:</label>

                            <input type="date" id="start" name="trip-start"
                             value="2001-07-22"
                             min="2000-01-01" max="2030-12-31"/>
							</td>
						</tr>
					</div>

					<div>
						<button
							type="submit"
							className="bg-cyan-100 px-32 py-3 rounded-xl"
						>
							CREATE
						</button>
					</div>
                    </EditorLayout>
                </div>
	);
};

export default CreateProcedureComponent;