import { useLocalStore } from "mobx-react";
import React from "react";
import { createTaskListStore } from "../stores/taskListStore";

const TaskListContext = React.createContext(null);

export const TaskListProvider = ({ children }) => {
  const taskListStore = useLocalStore(createTaskListStore);
  return (
    <TaskListContext.Provider value={taskListStore}>
      {children}
    </TaskListContext.Provider>
  );
};

export const useTaskListStore = () => React.useContext(TaskListContext);
