const express = require("express");
const app = express();
var mysql = require("mysql");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const routes = require('routes');
const dotenv = require("dotenv");
dotenv.config();

var conne = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

conne.connect(function (err) {
  if (err) {
    console.log("Error connecting to db server");
  } else {
    console.log("Connection established");
  }
});
