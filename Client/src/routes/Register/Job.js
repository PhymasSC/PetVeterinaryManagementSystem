import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { Input, Form, Button } from "../../components";
import Step from "../../components/Step";

const content = [
    { component: Input, content: "Staff ID" },
    { component: Input, content: "Position" },
    { component: Input, content: "Salary" },
    { component: Button, type: "submit", content: "Sign up" },
];

const JobComponent = () => {
    return (
        <>
            <EditorLayout title="Job Details">
				<Step />
                <Form
                    items={content}
                    action=""
                    method="post"
                    className="flex flex-col items-center py-4 w-full gap-2"
                />
            </EditorLayout>
        </>
        //   <div>
        /* <form action="" method="POST" className="flex flex-col items-center py-12"
				>

                <div className="pb-10 ">
						<tr>
							<th className="md:10rem lg:w-[20rem] text-left">
								Staff ID
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
								Postion
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
								Salary
							</th>
							<td>
								<input
									type="number"
                                    placeholder="without RM"
									className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
								/>
							</td>
						</tr>
					</div>

                        <button>Sign Up <input type="button" value="" /></button>
                        
                        </form> */

        //   </div>
    );
};

export default JobComponent;
