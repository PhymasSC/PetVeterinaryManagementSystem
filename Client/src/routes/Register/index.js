import React, { useState } from "react";
import EditorLayout from "../../layouts/EditorLayout";
// import { Input, Form, Button } from "../../components";
import PrimaryButton from "../../components/Button";
import Step from "../../components/Step";
import Axios from "axios";

const SignUpComponent = () => {
    const [username, setUsername] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [icno, setIcno] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const submitPost = () => {
        Axios.get("http://localhost:3001/", {
            username: username,
            phoneno: phoneno,
            password: password,
            confirmPassword: confirmPassword,
            icno: icno,
            address: address,
            email: email,
        });
    };
    // const methodA = () => console.log("TEST");
    // const content = [
    //     { component: Input, content: "Userame", onFocus: "w" },
    //     { component: Input, content: "Email" },
    //     { component: Input, content: "Phone Number" },
    //     { component: Input, content: "Password" },
    //     { component: Input, content: "Confirmation Password" },
    //     { component: Input, content: "IC Number" },
    //     { component: Input, content: "Address" },
    //     { component: Button, type: "submit", content: "Register" },
    // ];

    return (
        <EditorLayout title="Registration">
            <Step />
            {/* <Form
                items={content}
                action=""
                method="post"
                className="flex flex-col items-center py-4 w-full gap-2"
            /> */}

            <form className="flex flex-col items-center py-12">
                <div className="pb-10 ">
                    <tr>
                        <th className="md:10rem lg:w-[20rem] text-left">
                            Full Name
                        </th>
                        <td>
                            <input
                                type="text"
                                name="username"
                                className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                onChange={e => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </div>

                <div className="pb-10 ">
                    <tr>
                        <th className="md:10rem lg:w-[20rem] text-left">
                            E-Mail Address
                        </th>
                        <td>
                            <input
                                type="email"
                                name="email"
                                className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </div>

                <div className="pb-10 ">
                    <tr>
                        <th className="md:10rem lg:w-[20rem] text-left">
                            Phone Number
                        </th>
                        <td>
                            <input
                                type="text"
                                name="phoneno"
                                className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                onChange={e => {
                                    setPhoneno(e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </div>

                <div className="pb-10 ">
                    <tr>
                        <th className="md:10rem lg:w-[20rem] text-left">
                            IC Number
                        </th>
                        <td>
                            <input
                                type="text"
                                name="icno"
                                className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                onChange={e => {
                                    setIcno(e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </div>

                <div className="pb-10 ">
                    <tr>
                        <th className="md:10rem lg:w-[20rem] text-left">
                            Address
                        </th>
                        <td>
                            <input
                                type="text"
                                name="address"
                                className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                onChange={e => {
                                    setAddress(e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </div>

                <div className="pb-10 ">
                    <tr>
                        <th className="md:10rem lg:w-[20rem] text-left">
                            Password
                        </th>
                        <td>
                            <input
                                type="password"
                                name="password"
                                className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </div>

                <div className="pb-10 ">
                    <tr>
                        <th className="md:10rem lg:w-[20rem] text-left">
                            Confirmation Password
                        </th>
                        <td>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="rounded-lg w-[20rem] lg:w-[40rem] h-8 px-3 py-4 border-2 border-gray-300"
                                onChange={e => {
                                    setConfirmPassword(e.target.value);
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
                        CREATE
                    </PrimaryButton>
                </div>

                <p className="pt-10">Already have account?</p>
                <a
                    href="../Login"
                    target="_blank"
                    className="underline decoration-1 decoration-cyan-500 text-cyan-500 pt"
                >
                    Sign in
                </a>
            </form>
        </EditorLayout>
    );
};

export default SignUpComponent;
