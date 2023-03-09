//console.log("This is postman error solving");


//Now we send a request on postman

const express = require("express");
const app = express();
const port = 9992;

app.get("/",(req,res)=>{
    res.send("This is postman error tutorial");
});

app.listen(port, ()=>{
    console.log('server on the port ${port})');
})