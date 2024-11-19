// src/components/Blog/BlogPost.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPost.css';
import articlesData from '../../data/articlesData';

function BlogPost() {
    const { id } = useParams();
    const article = articlesData.find((article) => article.id === parseInt(id));

    if (!article) {
        return <p>Article introuvable</p>;
    }

    return (
        <div className="blog-post">
            <h2>{article.title}</h2>
            <p className="article-date">{article.date}</p>
            {article.image && (
                <img src={article.image} alt={article.title} className="article-image" />
            )}
            <div className="article-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default BlogPost;