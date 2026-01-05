const express = require("express");
const cors = require('cors')
require('dotenv').config();
const authRoutes = require('./routes/AuthRoutes')
const productRoutes = require('./routes/ProductRoutes')
require('./models/db')
const app = express();
const port = process.env.PORT ||4000

app.use(cors());
app.use(express.json());

app.get("/", function(req, res){
    res.send("welcome"); 
});

app.use('/auth',authRoutes);
app.use('/product',productRoutes);

app.listen(port);
 
 