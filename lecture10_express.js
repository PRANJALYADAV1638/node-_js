
const http = require("http");

const express=require("express");

const app =express();
app.get('/',(req,res)=>{
    return res.send("hello from homepage");
})
app.listen(8000, () => {
    console.log("server start");
});

/// code ko clean krta ha
