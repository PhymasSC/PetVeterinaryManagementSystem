// require("dotenv").config();
// const express = require("express");
// const app = express();

const mysql = require("mysql");
const dbconnection = mysql.createPool({
    host: "mysql8002.site4now.net",
    user: "a883ba_petvet",
    password: "pvms3999",
    database: "db_a883ba_petvet",
});

module.exports = dbconnection;


// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// app.get("../Client/src/routes/MedicalRecords/index.js", (req, res) => {
//     const insertQry =
//         "INSERT INTO medicalrecord (client, petName, presription, createdby, diagnosis) VALUES (?, ?, ?, ?)";
//     db.query(
//         insertQry,
//         [client, petName, presription, createdby, diagnosis],
//         (err, result) => {}
//     );
// });

// app.listen(3001, () => {
//     console.log("Listening server on port 3001");
// });