const passport = require("passport");
const express = require("express");
const router = express.Router();
const db = require("../config/database");

// this route is just used to get the user basic info
router.get('/status', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

// router.get("/status", (req, res) => {
//     if (req.user) return res.status(200).json(req.user);

//     res.status(200).send("TEST");
// });

// router.post("/login", (req, res, next) => {
//     passport.authenticate("local", function (err, user, info) {
//         if (err) return res.status(505).send("Server Error");
//         if (!user) return res.status(400).send(info);
//         req.logIn(user, (err) => {
//             if (err) return next(err);
//             return res.status(202).send(info);
//         });
//     })(req, res, next);
// });

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
