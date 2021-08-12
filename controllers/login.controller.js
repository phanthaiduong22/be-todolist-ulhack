const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
router.post("/", async function (req, res) {
  user = req.body;
  await userModel.add(user);
  res.send("Successfull");
});

module.exports = router;
