import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import BlogPost from '@/pages/BlogPost.jsx';
import { lazy, Suspense } from 'react';

// Only load components when they're needed
const Scientists = lazy(() => import('./pages/Scientists'));
const Investors = lazy(() => import('./pages/Investors'));
const Blog = lazy(() => import('./pages/Blog'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Suspense
          fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}
        >
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scientists" element={<Scientists />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
