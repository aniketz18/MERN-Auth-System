const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/AuthRoutes");
/* const productRoutes = require('./routes/ProductRoutes') */
require("./models/db");
const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).json({
    status: "ok",
    message: "Auth API is working",
  });
});

app.use("/auth", authRoutes);
/* app.use('/product',productRoutes); */

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port} `);
});
