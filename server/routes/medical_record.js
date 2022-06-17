const express = require("express");
const db = require("../config/database");
const router = express.Router();

router.post("/create", (req, res) => {
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

router.get("/retrieve", (req, res) => {
    db.query("SELECT * FROM medicalrecord", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

router.get("/retrieveOne", (req, res) => {
    const id = req.body.id;

    db.query("SELECT * FROM medicalrecord WHERE id=?", [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

router.post("/update", (req, res) => {
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

module.exports = router;
