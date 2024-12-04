import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

function BlogList({ articles, isAnimating }) {
  return (
    <div className={`blog-grid ${isAnimating ? 'animating' : ''}`}>
      {articles.map((article) => (
        <div key={article.id} className="article-card">
          <div className="article-image-container">
            <img src={article.image} alt={article.title} className="article-image-card" />
          </div>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <span>{article.date}</span>
          <Link to={`/blog/${article.slug}`} className="read-more">Lire plus</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
