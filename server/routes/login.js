const passport = require("passport-local");
const express = require("express");
const router = express.Router();

router.route("/login").get( (req, res) => {
    console.log("Test if connected");
});

module.exports = router;