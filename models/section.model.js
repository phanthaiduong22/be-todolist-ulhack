const db = require("../utils/db");
const { getAll } = require("./task.model");
module.exports = {
  async add(section) {
    return await db("sections").insert(section);
  },
  async getAll(username) {
    return await db("sections").select("*").where({ username });
  },
};
