// const express = require("express");
// const cors = require("cors");
// const PORT = process.env.PORT || 3001;
// const app = express();
// app.use(cors());
// app.use(express.json());
const db = require("../config/database");

app.post("/routes/register/api/create", (req, res) => {
    const username = req.body.username;
    const phoneno = req.body.phoneno;
    const password = req.body.password;
    const icno = req.body.icno;
    const address = req.body.address;
    const email = req.body.email;
    const job_detail =
        email.substring(email.indexOf("@") + 1) === "venice.my"
            ? "veterinary team"
            : "client";
    db.query(
        "INSERT INTO user (username, phoneno, password, icno, address, email, job_detail) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [username, phoneno, password, icno, address, email, job_detail],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(`Result: ${result}`);
        }
    );
});

// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`);
// });
