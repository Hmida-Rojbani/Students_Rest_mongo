const dbconnection = require('./db/connect');
const express = require('express');
const appDebug = require('debug')('app:debug');

const port = process.env.PORT || 3000;
const app = express();
dbconnection('mongodb://localhost:27017/glsi_a_test');



app.listen(port, ()=> appDebug(`Listening on ${port}`));