import { useState } from "react";

/* eslint-disable react/prop-types */
const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState(""); // Start with an empty string
  const [description, setDescription] = useState(""); // Start with an empty string
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState(""); // Start with an empty string

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;

    // Create task object
    const task = {
      title,
      description,
      priority,
      dueDate,
    };

    addTask(task);
    setTitle(""); // Reset to empty string
    setDescription(""); // Reset to empty string
    setPriority("Medium"); // Reset to default value
    setDueDate(""); // Reset to empty string
  };

  return (
    <form onSubmit={onSubmitHandler} className="mb-4 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Add New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border mb-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 dark:text-gray-100"
        required
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border mb-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 dark:text-gray-100"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 border mb-2 border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 dark:text-gray-100"
        required
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 dark:text-gray-100"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
      >
        Add task
      </button>
    </form>
  );
};

export default AddTaskForm;
