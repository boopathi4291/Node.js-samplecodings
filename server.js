const express = require('express');
const app = express();

const port =  8080;

app.get('/', (req,res) => {
    return res.sendFile('sample.html', { root: __dirname });
  });

  app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });
