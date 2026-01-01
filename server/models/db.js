const mongoose = require("mongoose");
require('dotenv').config();
mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl)
    .then(()=>{
        console.log("mongodb connected successfully");
        
    }).catch((err)=>{
        console.log(err);
        
    });

