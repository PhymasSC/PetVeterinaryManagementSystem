import React, { useState } from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { LayoutLoginRegis } from "../../layouts/EditorLayout";
import { Input, Form, Button } from "../../components";
import Step from "../../components/Step";
import Axios from "axios";
import PrimaryButton from "../../components/Button/styles";

// const content = [
//     { component: Input, content: "Staff ID" },
//     { component: Input, content: "Position" },
//     { component: Input, content: "Salary" },
//     { component: Button, type: "submit", content: "Sign up" },
// ];

const JobComponent = () => {
    const [staffid, setStaffid] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");

    const submitPost = () => {
        Axios.post("http://localhost:3001/auth/login", {
            staffid: staffid,
            position: position,
            salary: salary,
        });
    };
    // <>
    {
        /* <EditorLayout title="Job Details">
				<Step />
                <Form
                    items={content}
                    action=""
                    method="post"
                    className="flex flex-col items-center py-4 w-full gap-2"
                />
            </EditorLayout> */
    }
    // </>;
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

    return (
        <>
            <LayoutLoginRegis title="Registration">
                {/* <EditorLayout title="Login"> */}
                {/* <Form
                    items={content}
                    action=""
                    method="post"
                    className="flex flex-col items-center py-4 w-full gap-2"
                /> */}
                {/* {items.map(item => ( */}
                <h1 className="font-semibold text-xl pt-10 px-[120px]">
                    Job Details
                </h1>
                <form className="flex flex-col items-center py-12">
                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[10rem] text-left">
                                Staff ID
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="staffid"
                                    className="rounded-lg w-[10rem] lg:w-[20rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setStaffid(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[10rem] text-left">
                                Position
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="position"
                                    className="rounded-lg w-[10rem] lg:w-[20rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setPosition(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[10rem] text-left">
                                Salary
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="salary"
                                    className="rounded-lg w-[10rem] lg:w-[20rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setSalary(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div>
                        <PrimaryButton
                            type="submit"
                            className="bg-cyan-100 px-32 py-3 rounded-xl"
                            onClick={submitPost}
                        >
                            Sign up
                        </PrimaryButton>
                    </div>
                </form>
                {/* ))} */}
                {/* </EditorLayout> */}
            </LayoutLoginRegis>
        </>
    );
};

export default JobComponent;
