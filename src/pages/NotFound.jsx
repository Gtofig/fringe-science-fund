import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Fringe Science Fund</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist or has been moved."
        />
      </Helmet>

      <section className="h-screen flex items-center justify-center px-4">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-8xl font-extrabold mb-4">
              <span className="gradient-text">404</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-future-teal mx-auto mb-8"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          >
            The page you&#39;re looking for has disappeared into the quantum void. Perhaps it exists
            in another timeline, but not in this one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button to="/" size="lg">
              Return to Home
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
