import { motion } from 'framer-motion';
import Button from '../ui/Button';

const CTA = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative rounded-2xl overflow-hidden">
                    {/* Background with gradient overlay */}
                    <div className="absolute inset-0 bg-space-dark dark:opacity-90 opacity-80 z-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/30 to-cosmic-purple/30 z-0 stars"></div>

                    <div className="relative z-10 py-16 px-6 md:px-12 text-center">
                        <motion.h2
                            className="text-white text-3xl md:text-4xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Join the Fringe Science Renaissance
                        </motion.h2>

                        <motion.p
                            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            The question isn&#39;t whether we can afford to take this risk.
                            The question is: can we afford not to?
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Button to="/contact" size="lg">
                                Get Involved
                            </Button>
                            <Button to="/blog" variant="secondary" size="lg">
                                Read Our Blog
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;