/* eslint-disable react/prop-types */
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md rounded-lg dark:bg-gray-800">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
        Task Scheduler
      </h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <span role="img" aria-label="search" className="text-lg">
            🔍
          </span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <span role="img" aria-label="profile" className="text-lg">
            👤
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-600 relative transition-colors duration-300"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500" />
          ) : (
            <FaMoon className="text-blue-500" />
          )}
          <span
            className={`absolute block w-4 h-4 transition ease-in-out duration-500 ${
              isDarkMode ? "translate-x-10" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
