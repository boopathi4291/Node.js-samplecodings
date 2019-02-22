const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port =  8080;

app.get('/', (req,res) => {
    return res.sendFile("/templates/sample.html", { root: __dirname });
  });

app.get('/getExample/:name/:office', (req,res) => {
    let name=req.params.name;
    let office = req.params.office;
    return res.send(name+" is working in "+office+ ".");
  });

  app.post('/login',(req,res)=>{
console.log(req);

  });

  app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });
