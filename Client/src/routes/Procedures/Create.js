import React, { useState } from "react";
import EditorLayout from "../../layouts/EditorLayout";
import Axios from "axios";
import PrimaryButton from "../../components/Button/styles";

const FormCreateProcedures = () => {
    const [petName, setPetName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [cccat, setCccat] = useState("");
    const [surgicalCat, setSurgicalCat] = useState("");
    const [surgicalPro, setSurgicalPro] = useState("");
    const [surgicalEquip, setSurgicalEquip] = useState("");

    const submitPost = () => {
        Axios.post("http://localhost:3001/auth/create", {
            petName: petName,
            age: age,
            gender: gender,
            cccat: cccat,
            surgicalCat: surgicalCat,
            surgicalPro: surgicalPro,
            surgicalEquip: surgicalEquip,
        });
    };

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
                                Age
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="age"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setAge(e.target.value);
                                    }}
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
                                    name="gender"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setGender(e.target.value);
                                    }}
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
                                    name="cccat"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setCccat(e.target.value);
                                    }}
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
                                    name="surgicalCat"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setSurgicalCat(e.target.value);
                                    }}
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
                                    name="surgicalPro"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setSurgicalPro(e.target.value);
                                    }}
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
                                    name="surgicalEquip"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setSurgicalEquip(e.target.value);
                                    }}
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
                                    {/* <label for="appt">Select a time:</label> */}
                                    <input
                                        type="time"
                                        id="appt"
                                        name="appt"
                                        className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
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
                                {/* <label for="start">Start date:</label> */}

                                <input
                                    type="date"
                                    id="start"
                                    className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    name="trip-start"
                                    value="2001-07-22"
                                    min="2001-01-01"
                                    max="2060-12-31"
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

export default FormCreateProcedures;
