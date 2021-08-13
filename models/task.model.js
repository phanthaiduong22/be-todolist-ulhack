const db = require("../utils/db");
const { get } = require("./user.model");

module.exports = {
  async getAll(username) {
    console.log(username);
    return await db("tasks").where({ username: username });
  },
  async add(task) {
    return await db("tasks").insert(task);
  },
  async completeTask(username, task_id) {
    return await db("tasks")
      .where({ username: username, task_id: task_id })
      .update({ done: true });
  },
  async deleteTask(username, task_id) {
    return await db("tasks")
      .where({ username: username, task_id: task_id })
      .del();
  },
};
