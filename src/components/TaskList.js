import { useObserver } from "mobx-react";
// src/components/TaskList.js
import PropTypes from "prop-types";
import React from "react";
import Task from "./Task";

/* previous implementation of TaskList */

export default function PureTaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}) {
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  return useObserver(() => {
    if (loading) {
      return (
        <div className="list-items">
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
          {LoadingRow}
        </div>
      );
    }
    if (tasks.length === 0) {
      return (
        <div className="list-items">
          <div className="wrapper-message">
            <span className="icon-check" />
            <div className="title-message">You have no tasks</div>
            <div className="subtitle-message">Sit back and relax</div>
          </div>
        </div>
      );
    }
    const tasksInOrder = [
      ...tasks.filter((t) => t.state === "TASK_PINNED"),
      ...tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    return (
      <div className="list-items">
        {tasksInOrder.map((task) => (
          <Task
            key={task.id}
            task={task}
            onArchiveTask={onArchiveTask}
            onPinTask={onPinTask}
          />
        ))}
      </div>
    );
  });
}
PureTaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
};

PureTaskList.defaultProps = {
  loading: false,
};
