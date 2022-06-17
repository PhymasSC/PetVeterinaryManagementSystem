const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get(() => {});

router.post("/login", (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
        if (err) return res.status(505).send("Server Error");
        if (!user) return res.status(400).send(info);
        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.status(202).send(info);
        });
    })(req, res, next);
});

router.get("/status", (req, res) => {
    res.send(req.body.user || "FAILED TO GET");
});

router.post("/register", (req, res) => {
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
        "INSERT INTO user (name, phone_no, password, ic_no, address, email, job_detail) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [username, phoneno, password, icno, address, email, job_detail],
        (err, result) => {
            if (err) {
                res.send(email);
            }

            res.send(result);
        }
    );
});

module.exports = router;
