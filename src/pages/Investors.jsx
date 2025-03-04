import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { FiTarget, FiTrendingUp, FiUsers, FiShield, FiGlobe } from 'react-icons/fi';

const Investors = () => {
  const investmentModels = [
    {
      title: 'Angel Investor',
      description:
        'Make direct investments in specific fringe science projects that align with your interests and vision.',
      suitable: 'Individual investors interested in specific scientific areas',
    },
    {
      title: 'Fund Contributor',
      description:
        'Contribute to our general fund that supports a portfolio of high-risk, high-potential projects.',
      suitable: 'Investors looking for diversification across multiple fringe science projects',
    },
    {
      title: 'Strategic Partner',
      description:
        'Form a longer-term partnership to support specific research areas aligned with your strategic goals.',
      suitable:
        'Organizations, corporations, and institutions with strategic interests in breakthrough science',
    },
    {
      title: 'Philanthropic Supporter',
      description:
        'Make tax-deductible donations to advance civilization through scientific progress.',
      suitable: 'Donors interested in the societal impact of supporting paradigm-shifting science',
    },
  ];

  const impactAreas = [
    {
      icon: <FiTarget className="w-12 h-12 text-electric-blue" />,
      title: 'Technological Leapfrogging',
      description:
        'Fund breakthroughs that could render current technologies obsolete, creating entirely new industries.',
    },
    {
      icon: <FiTrendingUp className="w-12 h-12 text-electric-blue" />,
      title: 'Return on Investment',
      description:
        'While high-risk, the projects that succeed could generate extraordinary returns, similar to early-stage tech investments.',
    },
    {
      icon: <FiUsers className="w-12 h-12 text-electric-blue" />,
      title: 'Network Access',
      description:
        'Join our community of forward-thinking investors and brilliant scientific minds working at the edge of discovery.',
    },
    {
      icon: <FiShield className="w-12 h-12 text-electric-blue" />,
      title: 'Civilizational Resilience',
      description:
        'Help maintain our technological advantage in the larger conflict between progress and regression.',
    },
    {
      icon: <FiGlobe className="w-12 h-12 text-electric-blue" />,
      title: 'Legacy Impact',
      description:
        'Be remembered as an early supporter of breakthroughs that fundamentally changed human history and capability.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>For Investors - Fringe Science Fund</title>
        <meta
          name="description"
          content="Invest in high-risk, high-reward scientific breakthroughs that could transform civilization. Join our network of visionary investors."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-space-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              For <span className="gradient-text">Investors</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Fund the scientific breakthroughs that will shape the future of human civilization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" href="#contact">
                Become an Investor
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Investment Philosophy
            </motion.h2>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We take the same approach to fundamental science that venture capital takes to
                startups: bold, high-risk, high-reward investments in ideas that could change
                everything.
              </p>

              <blockquote className="border-l-4 border-electric-blue pl-4 italic text-gray-600 dark:text-gray-400 my-6">
                &#34;Most will fail, but the success stories could shake the foundations of reality
                itself, unlocking new energy sources, communication methods, or ways to manipulate
                matter.&#34;
              </blockquote>

              <p className="text-gray-700 dark:text-gray-300">
                By funding projects that are too unconventional for traditional sources, we create
                the possibility of breakthroughs that could transform entire industries and
                civilizations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Impact */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Impact of Your Investment
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Models */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ways to Invest
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <h3 className="text-xl font-semibold mb-3">{model.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{model.description}</p>
                  <p className="text-sm text-electric-blue font-medium">
                    Best for: {model.suitable}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Make an Impact?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact our investor relations team to discuss how you can be part of funding the next
              scientific revolution.
            </motion.p>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
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
                      Email
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
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  >
                    <option value="">Select an investment model</option>
                    <option value="Angel">Angel Investor</option>
                    <option value="Fund">Fund Contributor</option>
                    <option value="Strategic">Strategic Partner</option>
                    <option value="Philanthropic">Philanthropic Supporter</option>
                  </select>
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
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    placeholder="Tell us about your investment interests and any questions you have."
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg">
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Prefer to email us directly? Contact our investor relations team at{' '}
              <a
                href="mailto:invest@fringesciencefund.org"
                className="text-electric-blue hover:underline"
              >
                invest@fringesciencefund.org
              </a>
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Investors;
