require("dotenv").config();
const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const db = require("./config/database.js");
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const initializePassport = require("./config/passport-config.js");
// Setup routers variables
const authRouter = require("./routes/auth.js");

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

app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize()); // init passport on every route call
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.session()); //allow passport to use "express-session"
app.use(cors());
app.use(express.json());

// Set routers
app.use("/auth", authRouter);

//Middleware

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
