import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import BlogPost from '../components/Blog/BlogPost';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NotFound from '../pages/NotFound/NotFound';

function App() {
  return (
    <Router basename="/happyclicks">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} /> {/* Route 404 */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
