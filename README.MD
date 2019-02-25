do npm init -y which creates the package.json for u.

do npm install express --save 

create server.js file for node server

do npm install --save-dev nodemon for the real time change detection in browser

npm install --save body-parser for parsing the json string

npm install --save routes

###############mongo DB ##############################################

download the mongodb for your device .msi file and install and go to the below path 

do the below commands in C:\Windows\System32\cmd.exe command prompts

mongod.exe --dbpath='c:\data\db' =======to start the server

mongo 

use yourdbname == create db

show dbs== show database(shows only when db has its collection)

db.createCollection("collection name");

show collections

to delete a collection use drop method

db.drop("collectionname");

db.collectionname.insert({"name":"Boopathi"});

db.collectionname.find();


db.collectionname.find({"name":"Boopathi"});

db.collectionname.insertMany([{},{},{}])

db.collectionname.remove({});

db.collectionname.update({"email":"dinesh.k1@on.com"},{$set:{"name":"Dinesh.K"}});

###########to retrive one column in a json############

db.collectionname.find({},{name:1,_id:-1});

db.collectionname.find({},{name:1,_id:0});
