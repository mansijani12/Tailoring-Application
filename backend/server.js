const express = require('express')
const app = express()
const mongoose = require('mongoose');
app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});




mongoose.connect("mongodb://localhost:27017/abc",{useNewUrlParser: true, useUnifiedTopology: true},
function checkDb(error)
{
    if(error)
    {
        console.log("Error connecting to DB");
    }
    else
    {
        console.log("successfully connected to DB");
    }
});
app.use(express.json());
app.use(routes);