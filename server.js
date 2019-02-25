const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const simranRouter = require('./simran');
const homeRouter = require('./routes');
const port =  8080;

app.use('/home', homeRouter);
app.use('/simran', simranRouter);
app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });
