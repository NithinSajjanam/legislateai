import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4 mt-10">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} LegislateAI. Built with ❤️.
      </p>
    </footer>
  );
}
