import React from 'react';

export const Input = ({ icon: Icon, className = '', ...props }) => {
  return (
    <div className={`relative w-full ${className}`}>
      {Icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
          <Icon size={18} />
        </div>
      )}
      <input
        className={`w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${Icon ? 'pl-10' : 'pl-4'}`}
        {...props}
      />
    </div>
  );
};
