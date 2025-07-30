import React from 'react';
import { Search, Clipboard, Bell, ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate(-1)}
          aria-label="Back"
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <ArrowLeft size={20} className="text-gray-700 dark:text-gray-300" />
        </button>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <Clipboard size={20} className="text-gray-700 dark:text-gray-300" />
        </button>
        <button className="relative p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          <Bell size={20} className="text-gray-700 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
        </button>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <button className="ml-2 bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700 transition">
          {darkMode ? 'Light Mode' : 'Digk Mod'}
        </button>
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full border-2 border-purple-600"
        />
      </div>
    </header>
  );
};

export default Topbar;
