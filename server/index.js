const express = require("express");
const db = require("./config/database");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

// import routers
const loginRouter = require("./routes/login.js");
// const {check, validationResult} = require('express-validator');
app.use(cors());
app.use(express.json());
app.use(loginRouter);

app.get("/", (req, res) => {
    console.log("TEST CONNECTION");
});
app.post("/api/create", (req, res) => {
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
            // window.location.replace = "http://localhost:3000/login";
            res.redirect("http://localhost:3000/login");
        }
    );
});

app.post("/api/validate", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // check('email').notEmpty();
    // check('password').notEmpty();

    db.query(
        "SELECT userid, email, password FROM user WHERE email=?",
        email,
        (err, result) => {
            if (err) console.log(err);
            result = Object.values(JSON.parse(JSON.stringify(result)));
            // res.send(result);
            if (result[0].email === email && result[0].password === password) {
                res.redirect(200, "/to");
                //     // res.redirect("/");
                //     // res.redirect("./Client/src/routes/Dashboard");
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
