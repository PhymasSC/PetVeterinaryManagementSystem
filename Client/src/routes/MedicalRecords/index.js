import React, { useState, useEffect } from "react";
import EditorLayout from "../../layouts/EditorLayout";
import PrimaryButton from "../../components/Button";
import Axios from "axios";

const CreateMedicalRecord = () => {
    const [clientName, setClientName] = useState("");
    const [petName, setPetName] = useState("");
    const [prescription, setPrescription] = useState("");
    const [createdby, setCreatedby] = useState("");
    const [diagnosis, setDiagnosis] = useState("");

    const submitPost = () => {
        Axios.post("http://localhost:3001/api/create", {
            clientName: clientName,
            petName: petName,
            prescription: prescription,
            createdby: createdby,
            diagnosis: diagnosis,
        });
    };
    return (
        // <EditorLayout title="Edit">
        //     <form className="flex flex-col items-center py-12">
        //         <div className="pb-10">
        //             <tr>
        //                 <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
        //                     Client
        //                 </th>
        //                 <td>
        //                     <input
        //                         type="text"
        //                         name="clientName"
        //                         onChange={e => {
        //                             setClientName(e.target.value);
        //                         }}
        //                     />
        //                     {/* <select
        // 						id="clientName"
        // 						name="clientName"
        // 						className="rounded-lg w-[20rem] md:w-[30em] md:px-1 lg:w-[40em] h-10 px-2 border-2 border-gray-300"
        // 					>
        // 						<option
        // 							value="none"
        // 							className=""
        // 							selected
        // 							disabled
        // 						>
        // 							Client
        // 						</option>
        // 						<option value="Tan Yi Han">Tan Yi Han</option>
        // 						<option value="Alan Leong">Alan Leong</option>
        // 					</select> */}
        //                 </td>
        //             </tr>
        //         </div>
        //         <div className="pb-10">
        //             <tr>
        //                 <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
        //                     Pet Name
        //                 </th>
        //                 <td>
        //                     <input
        //                         type="text"
        //                         name="petName"
        //                         onChange={e => {
        //                             setPetName(e.target.value);
        //                         }}
        //                     />
        //                 </td>
        //             </tr>
        //         </div>
        //         <div className="pb-10">
        //             <tr>
        //                 <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
        //                     Prescription
        //                 </th>
        //                 <td>
        //                     <input
        //                         type="text"
        //                         name="prescription"
        //                         onChange={e => {
        //                             setPrescription(e.target.value);
        //                         }}
        //                     />
        //                 </td>
        //             </tr>
        //         </div>
        //         <div className="pb-10">
        //             <tr>
        //                 <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
        //                     Created by
        //                 </th>
        //                 <td>
        //                     <input
        //                         type="text"
        //                         name="prescription"
        //                         onChange={e => {
        //                             setCreatedby(e.target.value);
        //                         }}
        //                     />
        //                 </td>
        //             </tr>
        //         </div>
        //         <div className="pb-10">
        //             <tr>
        //                 <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
        //                     Diagnosis
        //                 </th>
        //                 <td>
        //                     <input
        //                         type="text"
        //                         name="diagnosis"
        //                         onChange={e => {
        //                             setDiagnosis(e.target.value);
        //                         }}
        //                     />
        //                 </td>
        //             </tr>
        //         </div>

        //         <div>
        //             <PrimaryButton
        //                 type="submit"
        //                 className="bg-cyan-100 px-32 py-3 rounded-xl"
        //                 onClick={submitPost}
        //             >
        //                 CREATE
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </EditorLayout>
        <div>
            <EditorLayout title="Medical Record">
                <form
                    action=""
                    method="POST"
                    className="flex flex-col items-center py-12"
                >
                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[20rem] text-left">
                                Client Name
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="clientName"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setClientName(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[20rem] text-left">
                                Pet Name
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="petName"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setPetName(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[20rem] text-left">
                                Prescription
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="prescription"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setPrescription(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[20rem] text-left">
                                Created By
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="createdby"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setCreatedby(e.target.value);
                                    }}
                               />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[20rem] text-left">
                                Diagnosis
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="diagnosis"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setDiagnosis(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div>
                        <PrimaryButton type="submit" onClick={submitPost}>
                            CREATE
                        </PrimaryButton>
                    </div>
                </form>
            </EditorLayout>
        </div>
    );
};

export default CreateMedicalRecord;
