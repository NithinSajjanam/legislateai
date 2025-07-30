import clsx from 'clsx';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md transition-all font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
    purple: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    outline: 'border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-400',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
