import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'For Scientists', path: '/scientists' },
        { name: 'For Investors', path: '/investors' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/80 dark:bg-space-dark/80 backdrop-blur-lg shadow-md'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-bold font-heading">
              <span className="text-electric-blue">Fringe</span>
              <span className="dark:text-white text-space-dark">Science</span>
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `px-3 py-2 text-base font-medium rounded-md transition-colors ${
                                        isActive
                                            ? 'text-electric-blue'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-electric-blue dark:hover:text-electric-blue'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                        <div className="ml-4">
                            <Button to="/contact" size="sm">
                                Contact Us
                            </Button>
                        </div>
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <div className="flex items-center space-x-3 md:hidden">
                        <ThemeToggle />
                        <button
                            className="text-gray-700 dark:text-gray-300 focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FiX className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-space-dark overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.path}
                                        to={link.path}
                                        onClick={closeMenu}
                                        className={({ isActive }) =>
                                            `px-4 py-3 text-base font-medium rounded-md ${
                                                isActive
                                                    ? 'bg-gray-100 dark:bg-gray-800 text-electric-blue'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                                <Button to="/contact" className="mt-4">
                                    Contact Us
                                </Button>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;