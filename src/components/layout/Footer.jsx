import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import NewsletterForm from '@/components/ui/NewsletterForm.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-heading">
                <span className="text-electric-blue">Fringe</span>
                <span className="dark:text-white text-space-dark">Science</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Funding the next wave of scientific revolution. We support bold, high-risk research
              that challenges mainstream orthodoxy and pushes the boundaries of human knowledge.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="mailto:info@fringesciencefund.org"
                className="text-gray-500 hover:text-electric-blue dark:text-gray-400 dark:hover:text-electric-blue transition-colors"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-electric-blue dark:text-gray-400 dark:hover:text-electric-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/scientists"
                  className="text-gray-600 hover:text-electric-blue dark:text-gray-400 dark:hover:text-electric-blue transition-colors"
                >
                  For Scientists
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-gray-600 hover:text-electric-blue dark:text-gray-400 dark:hover:text-electric-blue transition-colors"
                >
                  For Investors
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-electric-blue dark:text-gray-400 dark:hover:text-electric-blue transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-electric-blue dark:text-gray-400 dark:hover:text-electric-blue transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on fringe science and funding
              opportunities.
            </p>
            <NewsletterForm className="space-y-2" />
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Fringe Science Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
