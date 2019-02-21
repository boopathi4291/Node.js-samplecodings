const express = require('express');
const app = express();

const port =  8080;

app.get('/', (req,res) => {
    return res.sendFile('/nodePractices/templates/sample.html');
  });

  app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
  });

var myEvent= require('events');

var targetEvent = new myEvent.EventEmitter;

targetEvent.on("listenTo",(value)=>{
    console.log("event triggered with on  "+ value);
});
targetEvent.addListener("listenTo1",(value)=>{
    console.log("event triggered with addListener "+ value);
})
targetEvent.once("listenTo2",(value)=>{
    console.log("event triggered once "+ value);
})
targetEvent.once("error",(value)=>{
    console.log("error!  "+ value);
})

  targetEvent.emit('listenTo',"Boopathi");
  targetEvent.emit('listenTo1',"Boopathi1");
  targetEvent.emit('listenTo2',"Boopathi2");
  targetEvent.emit('listenTo2',"Boopathi2");
  targetEvent.emit('error',new Error('whoops!'));
