import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../../../json/GardeningInfo/AvsG/AvsG.json';

const ITEMS_PER_PAGE = 5; // Adjust the number of items per page

function AvsG() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  
    // Slice the articles array to get the articles for the current page
    const currentArticles = articles.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return ( 
        <div className="container my-5">
            <h2 className="text-center mb-4" style={{ color: '#4CAF50' }}>Articles on Gardening</h2>
            <div className="row">
                {currentArticles.map((article) => (
                    <div className="col-12 mb-4" key={article.id}>
                        <div className="card border-0 shadow-sm" style={{ backgroundColor: '#f9f9f9' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img 
                                        src={article.image} 
                                        alt={article.postTitle} 
                                        className="img-fluid rounded-start" 
                                        style={{ height: '200px', objectFit: 'cover' }} 
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: '#388E3C' }}>{article.postTitle}</h5>
                                        <p className="card-text">{article.content.substring(0, 100)}...</p>
                                        <Link to={`/AvsG_Detail/${article.id}`} className="btn btn-success">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} style={{ backgroundColor: '#388E3C', color: '#fff' }}>Previous</button>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)} style={{ backgroundColor: currentPage === index + 1 ? '#4CAF50' : '#f1f1f1', color: currentPage === index + 1 ? '#fff' : '#388E3C' }}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} style={{ backgroundColor: '#388E3C', color: '#fff' }}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AvsG;
