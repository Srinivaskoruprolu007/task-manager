import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Task 1", description: "This is first task" },
    { id: 2, title: "Task 2", description: "This is second task" },
  ];
  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">Tasks</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;