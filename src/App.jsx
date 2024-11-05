import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { addTask, getTasks, updateTask, deleteTask } from "./firestoreService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    try {
      await addTask(task);
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleUpdateTask = async (id, updatedTask) => {
    try {
      await updateTask(id, updatedTask);
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      const updatedTasks = await getTasks();
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 text-gray-800">
        <Sidebar />
        <div className="flex-1 p-4 flex flex-col">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <main className="flex-1 p-6">
            <AddTaskForm addTask={handleAddTask} />
            <TaskList
              tasks={tasks}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
