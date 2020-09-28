const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

export function createTaskListStore() {
  return {
    tasks: defaultTasks,
    archiveTask(id) {
      let foundIndex = this.tasks.findIndex((item) => item.id === id);
      this.tasks[foundIndex] = {
        ...this.tasks[foundIndex],
        state: "TASK_ARCHIVED",
      };
    },
    pinTask(id) {
      let foundIndex = this.tasks.findIndex((item) => item.id === id);
      this.tasks[foundIndex] = {
        ...this.tasks[foundIndex],
        state: "TASK_PINNED",
      };
    },
  };
}
