require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/database");
const passport = require("passport");
const initializePassport = require("./passport-config");

// import routers
const authRouter = require("./routes/auth.js");
// const {check, validationResult} = require('express-validator');
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

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
