import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Accordion from '../components/ui/Accordion';
import { faqData } from '../data/faq';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('General');

  return (
    <>
      <Helmet>
        <title>FAQ - Fringe Science Fund</title>
        <meta
          name="description"
          content="Frequently asked questions about the Fringe Science Fund, our mission, and how we support unconventional scientific research."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-space-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about our mission, funding approach, and how to get
              involved.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {faqData.map(category => (
                <motion.button
                  key={category.category}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                    activeCategory === category.category
                      ? 'bg-electric-blue text-white font-medium'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.category)}
                  whileTap={{ scale: 0.97 }}
                >
                  {category.category}
                </motion.button>
              ))}
            </div>

            {/* FAQ Content */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 gradient-text">{activeCategory} Questions</h2>

              {faqData.find(category => category.category === activeCategory) && (
                <Accordion
                  items={faqData.find(category => category.category === activeCategory).questions}
                />
              )}
            </motion.div>

            {/* Still Have Questions */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Can&#39;t find what you&#39;re looking for? Feel free to reach out to us directly.
              </p>
              <div className="inline-flex">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-electric-blue text-space-dark font-medium rounded-md hover:shadow-neon transition-all"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
