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
        Axios.post("http://localhost:3001/api/update", {
            id: id,
            clientName: clientName,
            petName: petName,
            prescription: prescription,
            createdby: createdby,
            diagnosis: diagnosis,
        });
    };

    const [items, setItems] = useState([]);

    fetch("http://localhost:3001/api/retrieveOne", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(res => res.json())
        .then(json => setItems(json));
    return (
        <EditorLayout title="Edit">
            <form method="POST" className="flex flex-col items-center py-12">
                {items.map(item => (
                    <div>
                        <input
                            type="hidden"
                            name="id"
                            value={item.id}
                            onChange={e => {
                                setId(e.target.value);
                            }}
                        />
                        <div className="pb-10">
                            <tr>
                                <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
                                    Client
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="clientName"
                                        value={item.client}
                                        onChange={e => {
                                            setClientName(e.target.value);
                                        }}
                                    />
                                    {/* <select
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
							</select> */}
                                </td>
                            </tr>
                        </div>
                        <div className="pb-10">
                            <tr>
                                <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
                                    Pet Name
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="petName"
                                        value={item.petName}
                                        onChange={e => {
                                            setPetName(e.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                        </div>
                        <div className="pb-10">
                            <tr>
                                <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
                                    Prescription
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="prescription"
                                        value={item.prescription}
                                        onChange={e => {
                                            setPrescription(e.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                        </div>
                        <div className="pb-10">
                            <tr>
                                <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
                                    Created by
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="createdby"
                                        value={item.createdby}
                                        onChange={e => {
                                            setCreatedby(e.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                        </div>
                        <div className="pb-10">
                            <tr>
                                <th className="w-[15rem] sm:w-[5rem] md:w-[10rem] md:px-2 lg:w-[20rem] text-left">
                                    Diagnosis
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="diagnosis"
                                        value={item.diagnosis}
                                        onChange={e => {
                                            setDiagnosis(e.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                        </div>
                    </div>
                ))}
                ;
                <div>
                    <PrimaryButton
                        type="submit"
                        className="bg-cyan-100 px-32 py-3 rounded-xl"
                        onClick={submitPost}
                    >
                        CREATE
                    </PrimaryButton>
                </div>
            </form>
        </EditorLayout>
    );
};

export default EidtMedicalRecord;
