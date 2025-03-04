import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300';

  const variantClasses = {
    primary: 'bg-electric-blue text-space-dark hover:shadow-neon',
    secondary:
      'border border-electric-blue bg-transparent text-electric-blue hover:bg-electric-blue/10',
    outline:
      'border border-gray-300 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
    ghost:
      'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const MotionComponent = motion.button;

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }}>
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <MotionComponent className={classes} whileTap={{ scale: 0.97 }} {...props}>
      {children}
    </MotionComponent>
  );
};

export default Button;
