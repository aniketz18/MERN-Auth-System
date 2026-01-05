const ensureAuthenticated = require("../middlewares/AuthEnsure");

const router = require("express").Router();

router.get("/",ensureAuthenticated, (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 799,
      inStock: true,
    },
    {
      id: 2,
      name: "Keyboard",
      category: "Electronics",
      price: 1299,
      inStock: false,
    },
    {
      id: 3,
      name: "Water Bottle",
      category: "Accessories",  
      price: 299,
      inStock: true,
    },
  ]);
});

module.exports = router;
