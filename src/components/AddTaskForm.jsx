/* eslint-disable react/prop-types */
import { useState } from "react";
const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    addTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mb-4 bg-white p-4 rounded shadow"
    >
      <h3 className="font-semibold mb-2">Add New Task</h3>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border mb-2 border-gray-300 rounded"
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border mb-2 border-gray-300 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
      >
        Add task
      </button>
    </form>
  );
};

export default AddTaskForm;
