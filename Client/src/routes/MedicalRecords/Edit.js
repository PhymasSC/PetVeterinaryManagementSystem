import React, { useState, useEffect } from "react";
import EditorLayout from "../../layouts/EditorLayout";
import PrimaryButton from "../../components/Button";
import Axios from "axios";
import { uuidv4 } from "uuid";

const EidtMedicalRecord = () => {
    const [id, setId] = useState("");
    const [clientName, setClientName] = useState("");
    const [petName, setPetName] = useState("");
    const [prescription, setPrescription] = useState("");
    const [createdby, setCreatedby] = useState("");
    const [diagnosis, setDiagnosis] = useState("");

    const submitPost = () => {
        Axios.post("http://localhost:3001/mr/update", {
            id: id,
            clientName: clientName,
            petName: petName,
            prescription: prescription,
            createdby: createdby,
            diagnosis: diagnosis,
        });
    };
    return (
        <div>
            <EditorLayout title="EDIT">
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
                            EDIT
                        </PrimaryButton>
                    </div>
                </form>
            </EditorLayout>
        </div>
    );
};

export default EidtMedicalRecord;
