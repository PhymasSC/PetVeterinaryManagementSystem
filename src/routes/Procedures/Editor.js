import React from "react";
import EditorLayout from "../../layouts/EditorLayout";
import { Clock } from "../../components/index";

import Input from "../../components/Input";
import { Button } from "../../components";
const FormEditProcedures = () => {
    return (
        <EditorLayout title="Edit">
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
                            <Input type="text" placeholder="123"></Input>
                        </td>
                    </tr>
                </div>
                <div>
                    <Button>Edit</Button>
                </div>
            </form>
        </EditorLayout>
    );
};

export default FormEditProcedures;
