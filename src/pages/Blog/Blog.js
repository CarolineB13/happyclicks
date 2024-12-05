import React, { useState, useEffect } from 'react';
import SEO from '../../components/SEO/SEO';
import blogBannerImage from '../../assets/blog-banner.png';
import Select from '../../components/Select/Select';
import BlogList from '../../components/BlogList/BlogList';
import articlesData from '../../data/articlesData';
import './Blog.css';

const ITEMS_PER_PAGE = 4;

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isAnimating, setIsAnimating] = useState(false);

  // Filtrage des articles
  const filteredArticles = selectedCategory === 'Tous'
    ? articlesData
    : articlesData.filter((article) => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Gère le changement de catégorie
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Revenir à la première page
    triggerAnimation();
  };

  // Gère le changement de page
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, "", `?page=${page}`); // Modifie l'URL
    triggerAnimation();
  };

  // Animation pour les transitions
  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Initialisation : récupère la page depuis l'URL
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = parseInt(queryParams.get("page"), 10) || 1; // Page par défaut : 1
    setCurrentPage(page);
  }, []);

  return (
    <div className="blog-page">
      {/* SEO */}
      <SEO
  title="Blog - HappyClicks"
  description={
    selectedCategory === 'Tous'
      ? "Découvrez les derniers articles sur le développement web, les tendances numériques et mes conseils pour vos projets."
      : `Explorez les articles de la catégorie "${selectedCategory}", où je partage mes idées et expériences en développement web.`
  }
  url={
    currentPage > 1
      ? `https://happyclicks.fr/blog?page=${currentPage}`
      : 'https://happyclicks.fr/blog'
  }
  image={blogBannerImage}
  structuredData={{
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "HappyClicks Blog",
    "url": "https://happyclicks.fr/blog",
    "blogPost": filteredArticles.map((article) => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "author": {
        "@type": "Person",
        "name": "Caroline Briois",
      },
      "datePublished": article.date,
      "image": article.image,
      "url": `https://happyclicks.fr/blog/${article.id}`,
    })),
  }}
>
  {/* Balises rel="prev" et rel="next" */}
  {currentPage > 1 && (
    <link
      rel="prev"
      href={`https://happyclicks.fr/blog?page=${currentPage - 1}`}
    />
  )}
  {currentPage < totalPages && (
    <link
      rel="next"
      href={`https://happyclicks.fr/blog?page=${currentPage + 1}`}
    />
  )}
</SEO>

      <h1>Mon Blog</h1>
      <p className="intro-text">
        {selectedCategory === 'Tous'
          ? `Bienvenue sur mon blog ! Ici, je partage mes expériences, conseils et réflexions sur le développement web et les tendances du numérique.`
          : `Découvrez les articles dans la catégorie "${selectedCategory}", où je partage mes idées sur le développement web et ses applications.`}
      </p>

      {/* Filtrage par catégorie */}
      <Select
        options={['Tous', ...new Set(articlesData.map((article) => article.category))]}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />

      {/* Liste des articles */}
      <BlogList articles={displayedArticles} isAnimating={isAnimating} />

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
            aria-label={`Page ${index + 1}`}
            aria-current={currentPage === index + 1 ? 'page' : undefined}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Blog;
