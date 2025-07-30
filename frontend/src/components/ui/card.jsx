import clsx from 'clsx';

export const Card = ({ children, variant = 'default', className = '' }) => {
  const baseClasses = 'rounded-lg shadow-md border';
  const variants = {
    default: 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700',
    subtle: 'bg-gray-50 border-gray-100 dark:bg-gray-900 dark:border-gray-800',
    outlined: 'bg-white border-blue-600 dark:bg-gray-800 dark:border-blue-500',
  };

  return (
    <div className={clsx(baseClasses, variants[variant], className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};
