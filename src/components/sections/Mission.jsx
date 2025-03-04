import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { FiZap, FiTarget, FiGlobe, FiStar } from 'react-icons/fi';

const Mission = () => {
    const features = [
        {
            icon: <FiZap className="w-8 h-8 text-electric-blue" />,
            title: 'High-Risk, High-Reward',
            description: 'Just like venture capital for startups, we fund bold ideas that might fail but could change everything if they succeed.'
        },
        {
            icon: <FiTarget className="w-8 h-8 text-electric-blue" />,
            title: 'Beyond Orthodoxy',
            description: 'We support research that challenges established paradigms and explores territory mainstream science has overlooked.'
        },
        {
            icon: <FiGlobe className="w-8 h-8 text-electric-blue" />,
            title: 'Advancing Civilization',
            description: 'Progress depends on scientific breakthroughs. Without them, we risk stagnation and vulnerability to anti-civilization forces.'
        },
        {
            icon: <FiStar className="w-8 h-8 text-electric-blue" />,
            title: 'Finding the Next Einstein',
            description: 'Revolutionary ideas often come from outsiders. We provide safe haven for brilliant minds working on the fringes.'
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.5
            }
        })
    };

    return (
        <section id="mission" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="gradient-text">Our Mission</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        We have reached a point where today's science has grown cautious and consolidated.
                        The engine of fundamental discovery has seized. To avoid a new dark age,
                        we must rediscover and revitalize the "fringe" in science—funding the unorthodox ideas
                        that mainstream academia shuns.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                        >
                            <Card className="h-full">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 flex-grow">{feature.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Mission;