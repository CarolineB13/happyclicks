import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SEO from '../../components/SEO/SEO';
import articlesData from '../../data/articlesData';
import './BlogPost.css';


function BlogPost() {
  const { slug } = useParams();
  const article = articlesData.find((article) => article.slug === slug);

  if (!article) {
    return (
      <div className="error-container">
        <h1>Article introuvable.</h1>
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
// Trouver les articles liés
const relatedArticles = () => {
  // Articles dans la même catégorie, en excluant l'article en cours
  const sameCategory = articlesData.filter(
    (relatedArticle) => relatedArticle.slug !== slug && relatedArticle.category === article.category
  );

  // Si le nombre d'articles dans la même catégorie est suffisant
  if (sameCategory.length >= 3) {
    return sameCategory.slice(0, 3); // Limiter à 3 articles
  }

  // Compléter avec des articles aléatoires d'autres catégories
  const otherArticles = articlesData
    .filter((relatedArticle) => relatedArticle.slug !== slug && relatedArticle.category !== article.category)
    .sort(() => 0.5 - Math.random()); // Mélange aléatoire

  // Combiner les articles de la même catégorie et d'autres catégories
  return [...sameCategory, ...otherArticles].slice(0, 3); // Limiter à 3 articles
};


  return (
    <div className="blog-post">
      {/* SEO pour l'article */}
      <SEO
        title={article.title}
        description={article.excerpt || article.content.substring(0, 150)}
        url={`https://happyclicks.fr/blog/${article.slug}`}
        image={article.image}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": article.title,
          "author": {
            "@type": "Person",
            "name": "Caroline Briois"
          },
          "datePublished": article.date,
          "image": article.image,
          "url": `https://happyclicks.fr/blog/${article.slug}`,
          "articleBody": article.content
        }}
      />

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
    {/* Boutons de partage */}
      <div className="share-buttons">
        <p>Partager cet article :</p>
        <a
          href={`https://twitter.com/intent/tweet?url=https://happyclicks.fr/blog/${article.slug}&text=${article.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button twitter"
        >
          Partager sur Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://happyclicks.fr/blog/${article.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-button facebook"
        >
          Partager sur Facebook
        </a>
      </div>

      {/* Articles liés */}
      <div className="related-articles">
        <h2>Articles liés :</h2>
        <ul>
          {relatedArticles().map((relatedArticle) => (
            <li key={relatedArticle.slug}>
              <Link to={`/blog/${relatedArticle.slug}`}>
                {relatedArticle.title}
              </Link>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogPost;
