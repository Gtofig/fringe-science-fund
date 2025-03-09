import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiCalendar, FiTag, FiArrowLeft } from 'react-icons/fi';
import Button from '../components/ui/Button';
import NewsletterForm from '../components/ui/NewsletterForm.jsx';
import { blogPosts } from '../data/blog';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the blog post matching the ID
    const foundPost = blogPosts.find(post => post.id.toString() === id);

    if (foundPost) {
      setPost(foundPost);
    } else {
      // If post not found, redirect to the blog page
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  // Find related posts (excluding current one)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} - Fringe Science Fund</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Blog Post Header */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-space-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-electric-blue dark:hover:text-electric-blue mb-6"
              >
                <FiArrowLeft className="mr-2" />
                Back to Blog
              </Link>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span className="flex items-center mr-4 mb-2">
                  <FiCalendar className="mr-1" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center mb-2">
                  <FiTag className="mr-1" />
                  {post.category}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Content */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-a:text-electric-blue"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Author:</span> {post.author}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <Button to={`/blog/${relatedPost.id}`} variant="secondary" size="sm">
                        Read More
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get the latest updates on fringe science, funding opportunities, and breakthrough
              research.
            </p>
            <NewsletterForm className="max-w-md mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
