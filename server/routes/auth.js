const passport = require("passport-local");
const express = require("express");
const router = express.Router();
const db = require("./../config/database");

router.post("/login", (req, res) => {
    passport.authenticate("local"),
        (req, res) => {
            console.log("req.sessionID:", req.sessionID);
            res.status(200).json({ user: req.user });
        };
});

router.get(
    "/status",
    (req, res) =>
        (req.isAuthenticated() && res.status(200).json({ user: req.user })) ||
        res.status(200).json({
            user: {
                accessId: 0,
                type: "",
                userId: 0,
                username: "",
            },
        })
);

router.post("/create", (req, res) => {
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

module.exports = router;
