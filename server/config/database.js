require("dotenv").config();
const mysql = require("mysql");

const dbconnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
});

module.exports = dbconnection;
