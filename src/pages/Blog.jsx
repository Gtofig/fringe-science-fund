import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiCalendar, FiTag } from 'react-icons/fi';
import Button from '../components/ui/Button';
import { blogPosts } from '../data/blog';
import NewsletterForm from '@/components/ui/NewsletterForm.jsx';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Get unique categories from posts
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Fringe Science Fund</title>
        <meta
          name="description"
          content="Explore articles about fringe science, scientific revolution, breakthrough funding, and more."
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
              Fringe Science <span className="gradient-text">Blog</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Thoughts on scientific revolution, breakthrough funding, and the future of
              civilization.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${
                  selectedCategory === category
                    ? 'bg-electric-blue text-white font-medium'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileTap={{ scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="flex items-center mr-4">
                      <FiCalendar className="mr-1" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center">
                      <FiTag className="mr-1" />
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{post.excerpt}</p>

                  <div className="mt-auto">
                    <Button to={`/blog/${post.id}`} variant="secondary" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No posts found in this category. Please try another category.
              </p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gray-50 dark:bg-gray-900 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get the latest updates on fringe science, funding opportunities, and breakthrough
                research.
              </p>

              <NewsletterForm className="max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
