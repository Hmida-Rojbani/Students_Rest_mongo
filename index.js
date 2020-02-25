const dbconnection = require('./db/connect');
const express = require('express');
const appDebug = require('debug')('app:debug');
const morgan = require('morgan');
const index_router = require('./routers/indexs');
const student_router = require('./routers/students');

const port = process.env.PORT || 3000;
const app = express();
dbconnection('mongodb://localhost:27017/glsi_a_test');
app.use(express.json());
app.use(morgan('tiny'));

app.use('',index_router);
app.use('/api/students',student_router);



app.listen(port, ()=> appDebug(`Listening on ${port}`));