import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SoilAndFertilizers from '../../../json/Essentials/SoilAndFertilizers.json';

function ListSF() {
    const [items, setItems] = useState([]);
    const [type, setType] = useState('soil'); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const newItems = SoilAndFertilizers[type] || [];
        setItems(newItems);
        setCurrentPage(1);
    }, [type]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(items.length / itemsPerPage) || 1;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 mb-4">
                    <h5 className="text-center">Select Type</h5>
                    <div className="btn-group-vertical w-100" role="group">
                        <button 
                            className={`btn ${type === 'soil' ? 'btn-success' : 'btn-outline-secondary'}`} 
                            onClick={() => setType('soil')}
                        >
                            Soil
                        </button>
                        <button 
                            className={`btn ${type === 'fertilizers' ? 'btn-success' : 'btn-outline-secondary'}`} 
                            onClick={() => setType('fertilizers')}
                        >
                            Fertilizers
                        </button>
                    </div>
                </div>
                <div className="col-md-9">
                    <h2 className="text-center mb-4">
                        {type === 'soil' ? 'Types of Soil' : 'Types of Fertilizers'}
                    </h2>
                    <div className="row g-4">
                        {currentItems.map(item => (
                            <div key={item.id} className="col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="card-img-top" 
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        loading="lazy"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-success">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <Link 
                                            className="btn btn-success" 
                                            to={`/DetailsSL/${type}/${item.id}`}
                                        >
                                            Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <nav className="mt-4">
                        <ul className="pagination justify-content-center" style={{ gap: '10px' }}>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button 
                                        className="page-link" 
                                        onClick={() => paginate(index + 1)}
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

export default ListSF;
