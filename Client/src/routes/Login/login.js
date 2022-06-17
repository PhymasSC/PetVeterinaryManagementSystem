import React, { useState } from "react";
// import EditorLayout from "../../layouts/EditorLayout";
import { LayoutLoginRegis } from "../../layouts/EditorLayout";
import { useNavigate, Link } from "react-router-dom";
import EditorLayout from "../../layouts/EditorLayout";
import PrimaryButton from "../../components/Button";
import Axios from "axios";
import doggieLogin from "../../assets/img/doggyLogin.png";
// const content = [
//     { component: Input, content: "Userame" },
//     { component: Input, content: "Password" },
//     { component: Button, type: "submit", content: "Log in" },
// ];

// const [items, setItems] = useState([]);
const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitPost = e => {
        e.preventDefault();
        Axios.post("http://localhost:3001/auth/login/", {
            username: username,
            password: password,
        }).then(res => {
            if (res.status === 202) navigate("/Home");
            console.log(res.status);
        });
    };

    return (
        <>
            <LayoutLoginRegis title="Login">
                {/* <EditorLayout title="Login"> */}
                {/* <Form
                    items={content}
                    action=""
                    method="post"
                    className="flex flex-col items-center py-4 w-full gap-2"
                /> */}
                {/* {items.map(item => ( */}
                <div className="flex justify-center mt-3">
                    <img
                        src={doggieLogin}
                        draggable="false"
                        width={400}
                        height={350}
                    />
                </div>
                <form className="flex flex-col items-center py-12">
                    {/* {items.map(
                        item => (
                            (<p>{item.email}</p>), (<p>{item.password}</p>)
                        )
                    )} */}
                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[10rem] text-left">
                                Username
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="username"
                                    className="rounded-lg w-[10rem] lg:w-[20rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setUsername(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>

                    <div className="pb-10 ">
                        <tr>
                            <th className="md:10rem lg:w-[10rem] text-left">
                                Password
                            </th>
                            <td>
                                <input
                                    type="password"
                                    name="password"
                                    className="rounded-lg w-[10rem] lg:w-[20rem] h-8 px-3 py-4 border-2 border-gray-300"
                                    onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </td>
                        </tr>
                    </div>
                    <div>
                        <PrimaryButton type="submit" onClick={submitPost}>
                            Sign in
                        </PrimaryButton>
                    </div>

                    <p className="pt-10">Doesn't have an account?</p>
                    <Link
                        to="/Register"
                        className="underline decoration-1 decoration-cyan-500 text-cyan-500 pt"
                    >
                        Sign up
                    </Link>
                </form>
                {/* ))} */}
                {/* </EditorLayout> */}
            </LayoutLoginRegis>
        </>
    );
};

export default SignIn;
