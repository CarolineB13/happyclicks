import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPost.css';
import articlesData from '../../data/articlesData';

function BlogPost() {
  const { slug } = useParams();
  const article = articlesData.find((article) => article.slug === slug);

  if (!article) {
    return (
      <div className="error-container">
        <p>Article introuvable.</p>
        <Link to="/blog" className="back-to-blog">Retourner à la liste des articles</Link>
      </div>
    );
  }

  if (!article.content || typeof article.content !== 'string') {
    return (
      <div className="error-container">
        <p>Contenu de l'article invalide ou manquant.</p>
        <Link to="/blog" className="back-to-blog">Retourner à la liste des articles</Link>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <h1>{article.title}</h1>
      <p className="article-date">Article publié le : {article.date}</p>
      <div className='article-image-blog-container'>
        {article.image && (
          <img src={article.image} alt={article.title} className="article-image" />
        )}
      </div>
      <div className="article-content">
        {/* Render Markdown content */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;
