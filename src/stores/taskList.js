import { observable } from "mobx";

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

const taskList = observable({
  tasks: defaultTasks,
  // onArchiveTask: (id) => {
  //   this.tasks.map((task) =>
  //     task.id === id ? { ...task, state: "TASK_ARCHIVED" } : task
  //   );
  // },
  archiveTask(id) {
    let foundIndex = this.tasks.findIndex((item) => item.id === id);
    this.tasks[foundIndex] = {
      ...this.tasks[foundIndex],
      state: "TASK_ARCHIVED",
    };
    // items[foundIndex] = item;
    // this.tasks.map((task) =>
    //   task.id === id ? { ...task, state: "TASK_ARCHIVED" } : task
    // );
  },
  // onPinTask: (id) => {
  //   this.tasks.map((task) =>
  //     task.id === id ? { ...task, state: "TASK_PINNED" } : task
  //   );
  // },
  pinTask(id) {
    let foundIndex = this.tasks.findIndex((item) => item.id === id);
    this.tasks[foundIndex] = {
      ...this.tasks[foundIndex],
      state: "TASK_PINNED",
    };
    // this.tasks = this.tasks.map((task) =>
    //   task.id === id ? { ...task, state: "TASK_PINNED" } : task
    // );
  },
});

export { taskList };
