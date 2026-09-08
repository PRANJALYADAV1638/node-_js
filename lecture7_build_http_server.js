//  NAME THE FILE index.js

const http=require("http");
const fs=require("fs");

const myserver=http.createServer((req,res)=>{
    const log=`new request ${req.url}\n`;
    fs.appendFile('log.txt',log ,(err,data)=>{

switch(req.url){
    case '/': res.end("homepage");
    break;
    case '/about':res.end("i am yash yadav");
    break;
    default: res.end("404");
}    })
});
myserver.listen(8000,()=>{
    console.log("server start");
})