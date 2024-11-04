import { useState } from "react";
import TaskItem from "./TaskItem";

// eslint-disable-next-line react/prop-types
const TaskList = ({ tasks, onDelete, onUpdate }) => {
  const [sortByPriority, setSortByPriority] = useState(false);
  // eslint-disable-next-line react/prop-types
  const sortedTasks = sortByPriority
    ? [...tasks].sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      })
    : tasks;

  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">Tasks</h2>
      <button
        onClick={() => setSortByPriority(!sortByPriority)}
        className="mb-2 bg-gray-300 dark:bg-gray-800 dark:text-gray-100 text-gray-800 py-1 px-4 rounded"
      >
        {sortByPriority ? "Show Dafault Order" : "Sort by Priority"}
      </button>
      <div className="space-y-2">
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
