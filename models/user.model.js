const db = require("../utils/db");

module.exports = {
  async all() {
    return await db("user");
  },
  async add(user) {
    return await db("users").insert(user);
  },
};
