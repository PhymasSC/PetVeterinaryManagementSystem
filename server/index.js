require("dotenv").config();
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const app = express();
const cors = require("cors");
const db = require("./config/database.js");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const initializePassport = require("./config/passport-config.js");
// Setup routers variables
const authRouter = require("./routes/auth.js");
const medicalRecordRouter = require("./routes/medical_record.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
    cors({
        origin: "http://localhost:3000", // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // allow session cookie from browser to pass through
    })
);
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize()); // init passport on every route call
app.use(passport.session()); //allow passport to use "express-session"

initializePassport(
    passport,
    (username) => {
        return db
            .promise()
            .query("SELECT * FROM user WHERE name = ? LIMIT 1", [username])
            .then((res) => res[0]);
    },
    (id) => {
        return db
            .promise()
            .query("SELECT * FROM user WHERE id = ? LIMIT 1", [id])
            .then((res) => res[0]);
    }
);

// Set routers
app.use("/auth", authRouter);
app.use("/record_api", medicalRecordRouter);

//Middleware

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
