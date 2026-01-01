const express = require("express");
require('dotenv').config();
require('./models/db')
const app = express();
const port = process.env.PORT ||4000


app.get("/", function(req, res){
    res.send("welcome"); 
});

app.listen(port);
 
 