const express = require("express");
const router = express.Router();
const {
  createtProduct,
  deleteProducts,
  getProduct,
  getProducts,
  updateProduct,
} = require("../controllers/products");

router.route("/").get(getProducts).post(createtProduct);

router.route("/:id").get(getProduct).delete(deleteProducts).put(updateProduct);

module.exports = router;
