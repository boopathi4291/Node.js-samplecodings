const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/bloredb");// this is the database connection for the local mongo db. we can connect with other database

 var Schema =mongoose.Schema({
     name:String,
     email:String
 });
 
 var simran = mongoose.model("simran",Schema);

router.get('/getJson',(req,res)=>{
simran.find(function(err,response){
    res.json(response);
});
});




module.exports = router;