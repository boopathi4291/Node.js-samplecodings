const fs = require('fs');

/**
 * creating a new folder using mkdir option in filesystem
 */
fs.mkdir('NewFolder',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder created");
    }
});

/**
 * to remove the directories
 */
['PDF','xl','ppt'].forEach((name)=>{
    fs.rmdir(name,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Folder created as "+name);
        }
    });
});

/**
 * to add array of directories
 */

['PDF','xl','ppt'].forEach((name)=>{
    fs.mkdir(name,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            fs.rmdir(name);
            console.log("Folder created as "+name);
        }
    });
});

/**
 * read the .txt or .json files using FS
 */
let fileData='';
 fs.readFile('package.json',(err,data)=>{
     if(err){
         console.log(err);
     }
     else{
        //writeData(data.toString());
        fileData=data.toString();
     }
     console.log(fileData);
 });

 /**
 * write the .txt or .json files using FS
 */
function writeData(data){
    fs.writeFile('mytext',data,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("the file has been written");
        }
    });
}

 /**
 * append the data into .txt or .json files using FS
 */
fs.appendFile('mytext','additionaly added texts',(err)=>{
    if(err){
        console.log(err);
    }
});

 /**
 * rename the .txt or .json files using FS
 */
fs.rename('mytext','myTexts.txt',(err)=>{
    if(err){
        console.log(err);
    }
});

 /**
 * Delete the .txt or .json files using FS
 */
fs.unlink('mytext',(err)=>{
    if(err){
        console.log(err);
    }
});