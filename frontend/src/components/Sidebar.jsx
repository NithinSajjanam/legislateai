import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Home,
  FileText,
  PieChart,
  Settings,
  Users,
  LayoutDashboard,
  MessageSquare,
  Phone,
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, to: '/' },
  { name: 'Chat', icon: MessageSquare, to: '/chat' },
  { name: 'Contact', icon: Phone, to: '/contact' },
  { name: 'Clarity', icon: Home },
  { name: 'Msnntete', icon: FileText },
  { name: 'Mnsncnett', icon: PieChart },
  { name: 'Dldotttts', icon: Users },
  { name: 'Rtotlecnpiora', icon: Settings },
  { name: 'And Dions', icon: Settings },
];

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`flex flex-col p-6 space-y-6 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          {!collapsed && <span className="text-xl font-bold text-gray-900 dark:text-white">LegislateAI</span>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle menu"
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <Menu size={20} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>
      <nav className="flex flex-col space-y-3">
        {menuItems.map(({ name, icon: Icon, to }) => {
          const isActive = activeItem === name;
          const content = (
            <>
              <Icon size={18} />
              {!collapsed && name}
            </>
          );
          return to ? (
            <Link
              key={name}
              to={to}
              onClick={() => setActiveItem(name)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {content}
            </Link>
          ) : (
            <button
              key={name}
              onClick={() => setActiveItem(name)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {content}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

