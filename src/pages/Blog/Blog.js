import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BlogList from '../../components/Blog/BlogList';
import BlogPost from '../../components/Blog/BlogPost';
import articlesData from '../../data/articlesData';
import './Blog.css';

function Blog() {
  const [articles] = useState(articlesData); // Importez les données d'articles depuis articlesData.js
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur un article et afficher les détails
  const handleArticleClick = (articleId) => {
    navigate(`/blog/${articleId}`); // Navigue vers la page de l'article avec l'ID spécifié
  };

  return (
    <div className="blog-page">
      <h1>Mon Blog</h1>
      <p className="intro-text">
        Bienvenue sur mon blog ! Ici, je partage mes expériences, conseils et réflexions sur le développement web et les tendances du numérique. J'espère que ces articles vous inspireront et vous guideront dans vos propres projets.
      </p>
      <Routes>
        {/* Route pour afficher la liste d'articles */}
        <Route
          path="/"
          element={<BlogList articles={articles} onArticleClick={handleArticleClick} />}
        />
        
        {/* Route pour afficher un article spécifique par son ID */}
        <Route path=":articleId" element={<BlogPost articles={articles} />} />
      </Routes>
    </div>
  );
}

export default Blog;
