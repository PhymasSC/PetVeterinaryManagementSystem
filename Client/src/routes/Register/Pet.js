import React, { useState } from "react";
import Axios from "axios";
import PrimaryButton from "../../components/Button/styles";
import { LayoutLoginRegis } from "../../layouts/EditorLayout";
import EditorLayout from "../../layouts/EditorLayout";
import { Input, Form, Button } from "../../components";
import Step from "../../components/Step";

// const content = [
//     { component: Input, content: "Pet Name" },
//     { component: Input, content: "Pet Type" },
//     { component: Input, content: "Age" },
//     { component: Input, content: "Race" },
//     { component: Input, content: "Gender" },
//     { component: Input, content: "Colour" },
//     { component: Input, content: "Date of Birth" },
//     { component: Button, type: "submit", content: "Add another pet" },
//     { component: Button, type: "submit", content: "Register" },
// ];

const SignUpComponent = () => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [age, setAge] = useState("");
    const [race, setRace] = useState("");
    const [gender, setGender] = useState("");
    const [colour, setColour] = useState("");
    const [dob, setDob] = useState("");

    const submitPost = () => {
        Axios.post("http://localhost:3001/auth/create", {
            petName: petName,
            petType: petType,
            age: age,
            race: race,
            gender: gender,
            colour: colour,
            dob: dob,
        });
    };
    return (
        // <div>
        //     <EditorLayout title="Pet Details">
        //         <Step />
        //         <Form
        //             items={content}
        //             action=""
        //             method="post"
        //             className="flex flex-col items-center py-4 w-full gap-2"
        //         />
        //     </EditorLayout>
        // </div>
        <>
            <LayoutLoginRegis title="Registration">
                {/* <Step /> */}
                {/* <Form
                items={content}
                action=""
                method="post"
                className="flex flex-col items-center py-4 w-full gap-2"
            /> */}
                <h1 className="font-semibold text-xl pt-10 px-[120px]">
                    Pet Details
                </h1>
                <form className="flex flex-col items-center py-12 pl-20 ">
                    <div className="pb-7">
                        <tr>
                            <th className="md:5rem lg:w-[10rem] text-left">
                                Pet Name
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="petName"
                                    className="rounded-lg w-[10rem] lg:w-[25rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setPetName(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-7 ">
                        <tr>
                            <th className="md:5rem lg:w-[10rem] text-left">
                                Pet type
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="petType"
                                    className="rounded-lg w-[10rem] lg:w-[25rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setPetType(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-7 ">
                        <tr>
                            <th className="md:5rem lg:w-[10rem] text-left">
                                Age
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="age"
                                    className="rounded-lg w-[10rem] lg:w-[25rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setAge(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-7 ">
                        <tr>
                            <th className="md:5rem lg:w-[10rem] text-left">
                                Race
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="race"
                                    className="rounded-lg w-[10rem] lg:w-[25rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setRace(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-7 ">
                        <tr>
                            <th className="md:5rem lg:w-[10rem] text-left">
                                Gender
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="gender"
                                    className="rounded-lg w-[10rem] lg:w-[25rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setGender(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-7 ">
                        <tr>
                            <th className="md:5rem lg:w-[10rem] text-left">
                                Colour
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="colour"
                                    className="rounded-lg w-[10rem] lg:w-[25rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setColour(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-7 ">
                        <tr>
                            <th className="md:5rem lg:w-[10rem] text-left">
                                Date of Birth
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="dob"
                                    className="rounded-lg w-[10rem] lg:w-[25rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setDob(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="flex">
                        <div className="px-10">
                            <PrimaryButton
                                type="button"
                                // onClick={submitPost}
                            >
                                Add another pet
                            </PrimaryButton>
                        </div>
                        <div className="px-10">
                            <PrimaryButton type="submit" onClick={submitPost}>
                                Sign up
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </LayoutLoginRegis>
        </>
    );
};

export default SignUpComponent;
