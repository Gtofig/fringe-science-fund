import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FiCheck } from 'react-icons/fi';

const ForScientists = () => {
    const benefits = [
        'Funding for high-risk, unconventional research projects',
        'Freedom to explore outside the boundaries of academic orthodoxy',
        'Community of forward-thinking scientists and researchers',
        'Mentorship and connections to help develop your ideas'
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image/Visual Side */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue to-future-teal opacity-30 blur-xl rounded-lg"></div>
                            <div className="relative bg-white dark:bg-gray-900 p-6 md:p-10 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800">
                                <div className="aspect-w-16 aspect-h-9 mb-6">
                                    <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-600 text-sm">
                      [Science Illustration]
                    </span>
                                    </div>
                                </div>
                                <blockquote className="italic text-gray-600 dark:text-gray-400 mb-4">
                                    "The next scientific revolution will not come from inside the establishment—it
                                    never has and never will. It will come from outsiders, dreamers, and the
                                    brilliant souls working in the fringes."
                                </blockquote>
                                <p className="text-sm text-gray-500 dark:text-gray-500 text-right">
                                    — From the Fringe Science Manifesto
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            <span className="gradient-text">For Scientists</span>
                        </h2>

                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Are you working on ideas that challenge established paradigms? Do mainstream
                            funding sources reject your proposals for being too unconventional? The Fringe
                            Science Fund was created for scientists like you.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <FiCheck className="text-electric-blue mt-1 mr-2 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button to="/scientists" size="lg">
                            Apply for Funding
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ForScientists;