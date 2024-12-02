import React, { useState, useEffect } from 'react';
import Select from '../../components/Select/Select';
import BlogList from '../../components/BlogList/BlogList';
import articlesData from '../../data/articlesData';
import './Blog.css';

const ITEMS_PER_PAGE = 4;

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredArticles = selectedCategory === 'Tous'
    ? articlesData
    : articlesData.filter((article) => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
    triggerAnimation();
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <div className="blog-page">
      <h1>Mon Blog</h1>
      <p className="intro-text">
        Bienvenue sur mon blog ! Ici, je partage mes expériences, conseils et réflexions sur le développement web et les tendances du numérique.
      </p>

      <Select
        options={['Tous', ...new Set(articlesData.map((article) => article.category))]}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />

      <BlogList articles={displayedArticles} isAnimating={isAnimating} />

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
