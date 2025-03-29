import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dark:opacity-70 opacity-20 stars"></div>
      <div className="absolute inset-0 dark:opacity-50 opacity-20 blur-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="mb-6 font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block gradient-text">Beyond Scientific Orthodoxy:</span>
            <span className="block dark:text-white text-space-dark">
              The Next Scientific Revolution Will Come From the Fringe
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Funding the next scientific revolution by supporting bold, unconventional ideas that
            have potential to change scientific paradigms.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button to="/scientists" size="lg">
              For Scientists
            </Button>
            <Button to="/investors" variant="secondary" size="lg">
              For Investors
            </Button>
          </motion.div>

          {/* Manifesto Link */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="/blog/1"
              className="inline-block text-electric-blue dark:text-electric-blue hover:underline font-medium text-lg"
            >
              <span>Read: The Fringe Science Manifesto</span>
              <span className="ml-2">→</span>
            </a>
          </motion.div>

          <motion.div
            className="mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <button
              onClick={() => {
                document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-electric-blue dark:hover:text-electric-blue transition-colors"
              aria-label="Scroll down"
            >
              <span className="mr-2">Learn More</span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
