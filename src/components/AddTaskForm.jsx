/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    addTask({ title, description, priority, dueDate });
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mb-4 bg-white dark:bg-gray-800 p-4 rounded shadow"
    >
      <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Add New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        required
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
        className="w-full p-2 mb-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
