const express = require('express');
const app = express();
const taskRouter = require('./routers/taskRouter');
const cors =require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/tasks", taskRouter);


module.exports = app;