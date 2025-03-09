import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiCheck, FiFileText, FiClock, FiUsers, FiAward } from 'react-icons/fi';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Scientists = () => {
  const eligibilityCriteria = [
    'Researchers with bold ideas that challenge established scientific paradigms',
    'Projects too unconventional for traditional academic funding',
    'Research with potential for revolutionary breakthroughs',
    'Scientists at any career stage, with or without traditional credentials',
  ];

  const procesSteps = [
    {
      icon: <FiFileText className="w-8 h-8 text-electric-blue" />,
      title: 'Submit Proposal',
      description:
        'Describe your idea, why it challenges current orthodoxy, and what revolutionary potential it holds.',
    },
    {
      icon: <FiUsers className="w-8 h-8 text-electric-blue" />,
      title: 'Initial Review',
      description:
        'Our team of scientists and advisors will review your proposal for revolutionary potential.',
    },
    {
      icon: <FiClock className="w-8 h-8 text-electric-blue" />,
      title: 'Detailed Evaluation',
      description:
        'Promising proposals undergo a deeper evaluation of feasibility and potential impact.',
    },
    {
      icon: <FiAward className="w-8 h-8 text-electric-blue" />,
      title: 'Funding Decision',
      description:
        'Selected projects receive funding, mentorship, and access to our community of fringe scientists.',
    },
  ];

  const fundingAreas = [
    {
      title: 'Alternative Energy',
      description:
        'We are still using the same energy sources as 70 years ago. We are looking for new, unconventional energy sources.',
    },
    {
      title: 'Fundamental Physics',
      description:
        'Explorations that challenge our understanding of foundational theories and propose new fundamental models.',
    },
    {
      title: 'Consciousness Studies',
      description:
        'Radically new models of consciousness, cognition, and the nature of reality that defy conventional neuroscience.',
    },
    {
      title: 'Biology and Evolution',
      description:
        'Novel theories of evolution, genetics, and human biology that challenge established paradigms.',
    },
    {
      title: 'Computing Paradigms',
      description:
        'Non-conventional approaches to computation, information processing, or artificial intelligence.',
    },
    {
      title: 'Other Breakthrough Areas',
      description:
        'Any area with potential for paradigm-shifting discoveries not covered by conventional funding sources.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>For Scientists - Fringe Science Fund</title>
        <meta
          name="description"
          content="Apply for funding for your unconventional scientific research. We support revolutionary ideas that challenge established paradigms."
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
              For <span className="gradient-text">Scientists</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We fund bold scientific ideas that challenge established paradigms and have the
              potential to create revolutionary breakthroughs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" href="#apply">
                Apply Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
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
              Who Should Apply?
            </motion.h2>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We&#39;re looking for scientists, researchers, and thinkers who are working on ideas
                that are too unconventional for traditional academic institutions and funding
                sources.
              </p>

              <h3 className="text-xl font-semibold mb-4">Eligibility Criteria:</h3>
              <ul className="space-y-3 mb-6">
                {eligibilityCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-electric-blue mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{criterion}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 dark:text-gray-300">
                <strong>Note:</strong> We value ideas over credentials. You don&#39;t need a PhD or
                academic affiliation to apply. What matters is the revolutionary potential of your
                work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funding Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Areas of Interest
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fundingAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Application Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {procesSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Apply?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Submit your proposal by completing our application form. We review applications on a
              rolling basis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" href="mailto:apply@fringesciencefund.org">
                Submit Your Proposal
              </Button>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Questions? Email us at{' '}
              <a
                href="mailto:info@fringesciencefund.org"
                className="text-electric-blue hover:underline"
              >
                info@fringesciencefund.org
              </a>
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scientists;
