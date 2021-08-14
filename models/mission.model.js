const db = require("../utils/db");
module.exports = {
  async getMissions(username) {
    return await db("missions").select("*").where({ username });
  },
  async getMessages(username) {
    return await db("messages").select("*").where({ username });
  },
  async addMission(mission) {
    return await db("missions").select("*").where({ username });
  },
};
