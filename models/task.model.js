const db = require("../utils/db");

module.exports = {
  async getAll(username) {
    return await db("tasks").where({ username: username });
  },
  async add(task) {
    return await db("tasks").insert(task);
  },
  async completeTask(username, task_id) {
    return await db("tasks")
      .where({ username: username, task_id: task_id })
      .update({ is_done: true });
  },
  async deleteTask(username, task_id) {
    return await db("tasks")
      .where({ username: username, task_id: task_id })
      .del();
  },
  async getProductivity(username) {
    let doneTasks = await db("tasks").where({
      username: username,
      is_done: true,
    });
    let Tasks = await db("tasks").where({ username: username });
    let lenDoneTasks = doneTasks.length;
    let lenTasks = Tasks.length;
    console.log(lenDoneTasks, lenTasks);
    return lenDoneTasks / lenTasks;
  },
};
