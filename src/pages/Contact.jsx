import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import Button from '../components/ui/Button';

const Contact = () => {
  const contactOptions = [
    {
      title: 'For Scientists',
      description:
        'Questions about application process, research criteria, or funding opportunities',
      email: 'research@fringesciencefund.org',
      icon: <FiMessageSquare className="w-8 h-8 text-electric-blue" />,
    },
    {
      title: 'For Investors',
      description: 'Information on investment opportunities, partnerships, or donation options',
      email: 'invest@fringesciencefund.org',
      icon: <FiUser className="w-8 h-8 text-electric-blue" />,
    },
    {
      title: 'General Inquiries',
      description: 'Media contacts, collaborations, general questions, or other requests',
      email: 'info@fringesciencefund.org',
      icon: <FiMail className="w-8 h-8 text-electric-blue" />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Fringe Science Fund</title>
        <meta
          name="description"
          content="Get in touch with the Fringe Science Fund. Contact our team with questions about funding, investing, or supporting our mission."
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
              <span className="gradient-text">Contact Us</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We&#39;d love to hear from you. Reach out with questions, ideas, or to discuss
              collaboration opportunities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>
                <a
                  href={`mailto:${option.email}`}
                  className="text-electric-blue hover:underline font-medium"
                >
                  {option.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Send Us a Message
            </motion.h2>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form className="space-y-6" data-netlify="true">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <Button type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Stay Updated
            </motion.h2>

            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Subscribe to our newsletter for the latest updates on fringe science and funding
              opportunities.
            </motion.p>

            <motion.form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                required
              />
              <Button type="submit">Subscribe</Button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
