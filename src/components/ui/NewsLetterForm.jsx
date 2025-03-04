import { useState } from 'react';
import Button from './Button';

const NewsletterForm = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    // In real Netlify, the form will be handled by Netlify
    // This is just for a better UX during development
    if (process.env.NODE_ENV === 'development') {
      e.preventDefault();
      // Simulate form submission
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className={className}>
      {!submitted ? (
        <form
          className="flex flex-col sm:flex-row gap-3"
          name="newsletter"
          method="POST"
          data-netlify="true"
          /* eslint-disable-next-line react/no-unknown-property */
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* These hidden fields are necessary for Netlify Forms */}
          <input type="hidden" name="form-name" value="newsletter" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button type="submit">Subscribe</Button>
        </form>
      ) : (
        <div className="text-center p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
          Thanks for subscribing!
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
