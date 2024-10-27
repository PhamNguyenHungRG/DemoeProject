import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import Tools from '../../json/GardeningInfo/ToolsList/Tools.json'; 

const ToolsPerPage = 9; 

function ToolsList() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(Tools.map(tool => tool.category))];

    const filteredTools = selectedCategory === 'All' ? Tools : Tools.filter(tool => tool.category === selectedCategory);

    const totalPages = Math.ceil(filteredTools.length / ToolsPerPage);

    const indexOfLastTool = currentPage * ToolsPerPage;
    const indexOfFirstTool = indexOfLastTool - ToolsPerPage;
    const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); 
        const hasHalfStar = rating - fullStars >= 0.5;
        const totalStars = 5;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <i 
                    key={i} 
                    className="bi bi-star-fill" 
                    style={{ color: '#ffc107', fontSize: '0.8rem', marginRight: '0.1rem' }}
                ></i>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <i 
                    key="half" 
                    className="bi bi-star-half" 
                    style={{ color: '#ffc107', fontSize: '0.8rem', marginRight: '0.1rem' }}
                ></i>
            );
        }

        for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
            stars.push(
                <i 
                    key={i + fullStars} 
                    className="bi bi-star" 
                    style={{ color: '#ffc107', fontSize: '0.8rem', marginRight: '0.1rem' }}
                ></i>
            );
        }

        return stars;
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4" style={{ color: '#2E8B57' }}>Gardening Tools</h2>
            <div className="row">
                <div className="col-md-3 animate__animated animate__fadeInLeft" style={{ animationDuration: '1s' }}>
                    <h5 className="mb-3" style={{ color: '#2E8B57' }}>Categories</h5>
                    <ul className="list-group">
                        {categories.map(category => (
                            <li 
                                key={category} 
                                className={`list-group-item ${selectedCategory === category ? 'active' : ''}`} 
                                onClick={() => handleCategoryChange(category)}
                                style={{ cursor: 'pointer', backgroundColor: selectedCategory === category ? '#cce5cc' : '#fff', color: '#2E8B57' }}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="col-md-9">
                    <div className="row">
                        {currentTools.map(tool => (
                            <div key={tool.ID} className="col-lg-4 col-md-6 mb-4">
                                <div className="card shadow-sm border-light rounded animate__animated animate__fadeIn" style={{ transition: 'transform 0.2s' }}>
                                    <img 
                                        src={tool.imgUrl} 
                                        alt={tool.name} 
                                        className="card-img-top" 
                                        style={{ 
                                            height: '200px', 
                                            width: '100%', 
                                            objectFit: 'cover', 
                                            borderTopLeftRadius: '.25rem', 
                                            borderTopRightRadius: '.25rem' 
                                        }} 
                                    />
                                    <div className="card-body d-flex flex-column" style={{ backgroundColor: '#f8f9fa' }}>
                                        <h5 className="card-title text-primary">{tool.name}</h5>
                                        <p className="card-text text-muted">{tool.category}</p>
                                        <p className="card-text d-flex align-items-center">
                                            {renderStars(tool.rating)}
                                            <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', color: '#2E8B57' }}>{tool.rating}</span>
                                        </p>
                                        <Link to={`/ToolsDetail/${tool.ID}`} className="btn btn-success mt-auto">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Phân trang */}
                    <nav className="mt-4">
                        <ul className="pagination justify-content-center" style={{ gap: '10px' }}>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button 
                                        className="page-link" 
                                        onClick={() => handlePageChange(index + 1)}
                                        style={{
                                            backgroundColor: currentPage === index + 1 ? '#4CAF50' : '#e6ffe6', 
                                            color: currentPage === index + 1 ? '#fff' : '#4CAF50',
                                            borderColor: '#4CAF50',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                            fontSize: '16px'
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default ToolsList;
