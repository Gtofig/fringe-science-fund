import { motion } from 'framer-motion';

const Card = ({ children, className = '', highlight = false, ...props }) => {
  const baseClasses = 'p-6 bg-white dark:bg-gray-900 border rounded-lg transition-all duration-300';

  const borderClasses = highlight
    ? 'border-electric-blue shadow-md dark:shadow-electric-blue/20'
    : 'border-gray-200 dark:border-gray-800 shadow-lg';

  const hoverClasses = highlight
    ? 'hover:shadow-neon'
    : 'hover:shadow-xl dark:hover:shadow-gray-900/30';

  const classes = `${baseClasses} ${borderClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={classes}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
