let http=require('http');
let app = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`<div>
        <form >
        <input type = "text" placeholder="enter Name"/>
        <input type = "password" placeholder="enter Password"/>
        <input type="submit" value="Submit"/>
    </form>
    </div>`);
    res.end();
    }
});
app.listen(5000);