import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FiTrendingUp, FiUsers, FiShield, FiAward, FiClock } from 'react-icons/fi';

const ForInvestors = () => {
  const investmentPoints = [
    {
      icon: <FiTrendingUp className="w-6 h-6 text-electric-blue" />,
      title: 'High-Impact Potential',
      description:
        'Like venture capital, most projects may fail, but the ones that succeed could transform entire industries and civilizations.',
    },
    {
      icon: <FiUsers className="w-6 h-6 text-electric-blue" />,
      title: 'Connect with Visionaries',
      description:
        'Join a network of forward-thinking investors and scientists working on the frontier of human knowledge.',
    },
    {
      icon: <FiShield className="w-6 h-6 text-electric-blue" />,
      title: 'Preserve Civilization',
      description:
        'Help maintain our technological edge in the conflict between progress and regression.',
    },
    {
      icon: <FiAward className="w-6 h-6 text-electric-blue" />,
      title: 'Legacy Impact',
      description:
        'Be remembered as an early supporter of breakthrough discoveries that changed human history.',
    },
    {
      icon: <FiClock className="w-6 h-6 text-electric-blue" />,
      title: 'Get Early Access To New Discoveries',
      description: 'Be the first to know about new discoveries and apply them in practice',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">For Investors</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join us in taking the same approach to fundamental science that venture capital takes to
            startups: bold, high-risk, high-reward investments in ideas that could change
            everything.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {investmentPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{point.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button to="/investors" size="lg">
              Become an Investor
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;
