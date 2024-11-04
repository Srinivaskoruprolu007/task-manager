/* eslint-disable react/prop-types */
const TaskItem = ({ task }) => {
  return (
    <div className="bg-white p-3 rounded shadow">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
