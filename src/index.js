import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});




ReactDOM.render(<App />,document.getElementById('root')
);

