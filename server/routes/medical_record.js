const express = require("express");
const db = require("../config/database");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/routes/medical_record/api/create", (req, res) => {
    const clientName = req.body.clientName;
    const petName = req.body.petName;
    const prescription = req.body.prescription;
    const createdby = req.body.createdby;
    const diagnosis = req.body.diagnosis;
    // const email = req.body.email;
    // const jobdetail = email.substring(email.indexOf('@') + 1) === "venice.my" ? "veterinary team" : "client"; saved for register
    db.query(
        "INSERT INTO medicalrecord (client, petName, prescription, createdby, diagnosis) VALUES (?, ?, ?, ?, ?, ?)",
        [clientName, petName, prescription, createdby, diagnosis],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(`Result: ${result}`); 
        }
    );
});

app.get("/api/retrieve", (req, res) => {
    db.query("SELECT * FROM medicalrecord", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get("/api/retrieveOne", (req, res) => {
	const id = req.body.id;

    db.query("SELECT * FROM medicalrecord WHERE id=?", [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.post("/api/update", (req, res) => {
	const id = req.body.id;
    const clientName = req.body.clientName;
    const petName = req.body.petName;
    const prescription = req.body.prescription;
    const createdby = req.body.createdby;
    const diagnosis = req.body.diagnosis;

    db.query(
        "UPDATE medicalrecord SET client=?, petName=?, prescription=?, createdby=?, diagnosis=? WHERE id=?",
        [clientName, petName, prescription, createdby, diagnosis, id],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(`Result: ${result}`); 
        }
    );
});
