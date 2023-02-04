const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const getTypesRouter = require('./routes/getTypes');
const getTypeImageRouter = require('./routes/typeImage');
const getPhaseAddonImageRouter = require('./routes/phaseAddonImage');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use('/gettypes', getTypesRouter);
app.use('/typeimage', getTypeImageRouter);
app.use('/phaseaddonimage', getPhaseAddonImageRouter);


module.exports = app;