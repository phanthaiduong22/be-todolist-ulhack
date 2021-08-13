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
};
