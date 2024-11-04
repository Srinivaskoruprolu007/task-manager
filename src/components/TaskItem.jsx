import { useState } from "react";

/* eslint-disable react/prop-types */
const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleSave = () => {
    onUpdate(task.id, {
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      dueDate: editedDueDate,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-3 rounded shadow flex justify-between items-center text-gray-900 dark:text-gray-100">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full mb-2 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100"
          />
          <select
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded text-gray-900 dark:text-gray-100"
          />
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-gray-800 dark:text-gray-100">
            {task.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
          {task.dueDate && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Due: {task.dueDate}
            </p>
          )}
        </div>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
