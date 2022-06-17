import React, { useState } from "react";
import StyledTable from "./styles";
import { Pencil, UserCircle } from "phosphor-react";
import Axios from "axios";

const StyledTableMedical = () => {
    // const [id, setId] = useState();
    // const edit = () => {
    //     Axios.post("http://localhost:3001/medical_record/api/retrieveOne", {
    //         id: id,
    //     });
    // };

    const [items, setItems] = useState([]);

    fetch("http://localhost:3001/medical_record/api/retrieve", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(res => res.json())
        .then(json => setItems(json));

    return (
        <StyledTable>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div>Time</div>
                            </th>
                            {/* <th>
                                <div>Date</div>
                            </th> */}
                            <th>
                                <div>Client</div>
                            </th>
                            <th>
                                <div>Pet Name</div>
                            </th>
                            <th>
                                <div>Note</div>
                            </th>
                            <th>
                                <div>Medication</div>
                            </th>
                            <th>
                                <div>Weight(kg)</div>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    {items.map(item => (
                        <tbody>
                            <tr>
                                <input
                                    type="hidden"
                                    name="id"
                                    value={item.id}
                                    // onChange={e => {
                                    //     setId(e.target.value);
                                    // }}
                                />
                                <td>{item.dt}</td>
                                <td>{item.client}</td>
                                <td>{item.petName}</td>
                                <td>{item.prescription}</td>
                                <td>{item.createdby}</td>
                                <td>{item.diagnosis}</td>
                                {/* <td>Fever</td>
                                        <td>Panadol</td>
                                        <td>3.5</td> */}
                                <td>
                                    <Pencil size={20}/>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </StyledTable>
    );
};

const StyledTableProcedure = () => {
    return (
        <StyledTable>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div>Time</div>
                            </th>
                            <th>
                                <div>Date</div>
                            </th>
                            <th>
                                <div>Pet Name</div>
                            </th>
                            <th>
                                <div>Core Curriculum Category</div>
                            </th>
                            <th>
                                <div>Surgical Category</div>
                            </th>
                            <th>
                                <div>Surgical Procedure</div>
                            </th>
                            <th>{/* <div>Edit</div> */}</th>
                            {/* <th>
								<div>Review</div>
							</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>9:30</td>
                            <td>25/5/2022</td>
                            <td>Lucky</td>
                            <td>Abdominal-SA</td>
                            <td>General</td>
                            <td>
                                Abdominal exploratory with drainage technique
                            </td>
                            <td>
                                <Pencil size={20} />
                            </td>
                            {/* <td>
								
							</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </StyledTable>
    );
};

const StyledTableRecord = () => {
    return (
        <StyledTable>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div>Time</div>
                            </th>
                            <th>
                                <div>Date</div>
                            </th>
                            <th>
                                <div>Pet Name</div>
                            </th>
                            <th>
                                <div>Note</div>
                            </th>
                            <th>
                                <div>Medication</div>
                            </th>
                            <th>
                                <div>Weight(kg)</div>
                            </th>
                            <th>{/* <div>Edit</div> */}</th>
                            {/* <th>
								<div>Review</div>
							</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            {/* <td>
								<div>
									<input type="checkbox" id="row_1" />
								</div>
							</td> */}
                            <td>9:30</td>
                            <td>25/5/2022</td>
                            <td>Lucky</td>
                            <td>Fever</td>
                            <td>Panadol</td>
                            <td>3.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </StyledTable>
    );
};

const StyledTableAppointment = () => {
    return (
        <StyledTable>
            <div>
                <table>
                    {/* <thead> */}
                    {/* <tr>
							<th>
								<div>Time</div>
							</th>
							<th>
								<div>Date</div>
							</th>
							<th>
								<div>Pet Name</div>
							</th>
							<th>
								<div>Note</div>
							</th>
							<th>
								<div>Medication</div>
							</th>
							<th>
								<div>Weight(kg)</div>
							</th>
							<th>
								<div>Edit</div>
							</th>
							{/* <th>
								<div>Review</div>
							</th> */}
                    {/* </tr>  */}
                    {/* </thead> */}

                    <tbody>
                        <tr>
                            <td>
                                <UserCircle size={40} />
                            </td>
                            <td>
                                Kim Yi Han
                                <br />
                                <label>Client</label>
                            </td>
                            <td>
                                012-773 8531
                                <br />
                                <label>Phone Number</label>
                            </td>
                            <td>
                                Golden
                                <br />
                                <label>Pet Name</label>
                            </td>
                            <td>
                                9:30
                                <br />
                                <label>Time</label>
                            </td>
                            <td>
                                Dr. Vincent
                                <br />
                                <label>Vet</label>
                            </td>
                            <td>
                                25/5/2022
                                <br />
                                <label>Date</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </StyledTable>
    );
};

export default StyledTableMedical;
export { StyledTableProcedure, StyledTableRecord, StyledTableAppointment };
