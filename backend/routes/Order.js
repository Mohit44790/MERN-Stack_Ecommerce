const express = require("express");
const {
  fetchOrderByUser,
  deleteOrder,
  updateOrder,
  fetchAllOrders,
  createOrder,
} = require("../controller/Order");

const router = express.Router();
//  /orders is already added in base path
router
  .post("/orders", createOrder)
  .get("/own", fetchOrderByUser)
  .delete("/:id", deleteOrder)
  .patch("/:id", updateOrder)
  .get("/", fetchAllOrders);

exports.router = router;
