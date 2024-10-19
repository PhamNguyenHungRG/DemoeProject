import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../../../json/GardeningInfo/AvsG/AvsG.json'; // Assuming you're using the same articles data

const AvsG_Detail = () => {
    const { id } = useParams(); // Get the article ID from the URL
    const article = articles.find(article => article.id === parseInt(id)); // Find the article by ID

    return (
        <div className="container my-5">
            {article ? (
                <>
                    <h2 className="text-center mb-4" style={{ color: '#4CAF50', fontWeight: 'bold' }}>{article.postTitle}</h2>
                    <div className="text-center mb-4">
                        <img 
                            src={article.image} 
                            alt={article.postTitle} 
                            className="img-fluid rounded" 
                            style={{ height: '300px', objectFit: 'cover' }} 
                        />
                    </div>
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
                                    {article.content.split('\n').map((line, index) => (
                                        <span key={index}>{line}<br /></span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h3>Article not found.</h3>
                </div>
            )}
            <div className="text-center mt-4">
                <Link to="/AvsG" className="btn btn-success">Back to Articles</Link>
            </div>
        </div>
    );
};

export default AvsG_Detail;
