const express = require('express');
var router = express.Router();

var obj={'name':'boopathi','age':28};

router.get('/',(req,res)=>{
return res.sendFile("/templates/sample.html", { root: __dirname });
});

router.get('/getJson',(req,res)=>{
    res.json(obj);
    });

router.get('/getExample/:name/:office', (req,res) => {
    let name=req.params.name;
    let office = req.params.office;
    return res.send(name+" is working in "+office+ ".");
  });

//   router.post('/login',(req,res)=>{
// console.log(req);

//   });

module.exports= router;