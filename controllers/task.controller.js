const express = require("express");
const router = express.Router();
const taskModel = require("../models/task.model");

router.get("/:username", async function (req, res) {
  try {
    username = req.params.username;
    tasks = await taskModel.getAll(username);
    res.status(200).send(tasks);
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

router.post("/", async function (req, res) {
  try {
    task = req.body;
    await taskModel.add(task);
    res.status(200).send({ content: "Add Task Successful" });
  } catch {
    res.status(401).send({ content: "Unauthorized" });
  }
});

module.exports = router;
