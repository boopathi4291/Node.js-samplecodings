const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const router = require('./routes');
const port =  8080;


app.use('/', router);

app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });
