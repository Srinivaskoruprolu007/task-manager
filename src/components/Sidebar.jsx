const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md h-screen flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:bg-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          My Tasks
        </h2>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <span role="img" aria-label="home" className="mr-3">
            🏠
          </span>
          All Tasks
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <span role="img" aria-label="completed" className="mr-3">
            ✅
          </span>{" "}
          Completed
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <span role="img" aria-label="priority" className="mr-3">
            ⚡
          </span>{" "}
          Priority
        </button>
        <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <span role="img" aria-label="due soon" className="mr-3">
            📅
          </span>{" "}
          Due Soon
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
