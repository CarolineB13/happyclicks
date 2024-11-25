import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Home from "../pages/Home/Home";
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import BlogPost from '../components/Blog/BlogPost';
import NotFound from '../pages/NotFound/NotFound';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} /> {/* Route 404 */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
