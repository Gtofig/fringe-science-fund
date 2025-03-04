import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
            <button
                className="flex justify-between items-center w-full py-4 px-1 text-left focus:outline-none"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
                    {question}
                </h3>
                <span className="text-gray-500 dark:text-gray-400 ml-4 flex-shrink-0">
          {isOpen ? <FiChevronUp className="w-5 h-5" /> : <FiChevronDown className="w-5 h-5" />}
        </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="py-3 px-1 text-gray-600 dark:text-gray-400">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Accordion = ({ items, allowMultiple = false }) => {
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (index) => {
        setOpenItems(prev => {
            const newOpenItems = new Set(prev);

            if (newOpenItems.has(index)) {
                newOpenItems.delete(index);
            } else {
                if (!allowMultiple) {
                    newOpenItems.clear();
                }
                newOpenItems.add(index);
            }

            return newOpenItems;
        });
    };

    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItems.has(index)}
                    onClick={() => toggleItem(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;