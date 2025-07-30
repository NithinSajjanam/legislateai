import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Chat', href: '/chat' },
    { label: 'Contact', href: '/contact' },
    
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-4 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-wide font-gemini select-none">
          LegislateAI
        </div>
        <button
          className="md:hidden p-2 rounded-md hover:bg-purple-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <div className={`space-x-6 hidden md:flex`}>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:underline hover:text-cyan-300 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 flex flex-col">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-2 hover:bg-purple-700 rounded transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
