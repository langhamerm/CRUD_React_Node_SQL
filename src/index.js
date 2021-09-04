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
  host: 'localhost',
  user: 'root',
  password: '${Gitlit13)',
  database: 'pedrocrud'
});




ReactDOM.render(<App />,document.getElementById('root')
);

