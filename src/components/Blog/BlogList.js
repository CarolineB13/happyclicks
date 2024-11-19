import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import articlesData from '../../data/articlesData';

function BlogList() {
    return (
        <div className="blog-list">
          {articlesData.map((article) => (
            <div key={article.id} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span>{article.date}</span>
                <Link to={`/blog/${article.id}`} className="read-more">Lire plus</Link>
            </div>
          ))}
    </div>
  );
}

export default BlogList;
