const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const createProjectRouter = require('./routes/createproject');
const projectRouter = require('./routes/project');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use('/createProject', createProjectRouter);
app.use('/project', projectRouter);

module.exports = app;