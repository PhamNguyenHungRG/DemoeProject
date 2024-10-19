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
        <div style={{ marginTop: '20px', padding: '20px' }}>
            <div className="row">
                <div className="col-md-3 mb-3">
                    <h5 className="text-center">Select Type</h5>
                    <div className="d-flex flex-column">
                        <button 
                            className="btn mb-2" 
                            style={{ backgroundColor: type === 'soil' ? '#4CAF50' : '#6c757d', color: '#fff' }} 
                            onClick={() => setType('soil')}
                        >
                            Soil
                        </button>
                        <button 
                            className="btn" 
                            style={{ backgroundColor: type === 'fertilizers' ? '#4CAF50' : '#6c757d', color: '#fff' }} 
                            onClick={() => setType('fertilizers')}
                        >
                            Fertilizers
                        </button>
                    </div>
                </div>
                <div className="col-md-9">
                    <h2 className="text-center mb-3">
                        {type === 'soil' ? 'Types of Soil' : 'Types of Fertilizers'}
                    </h2>
                    <div className="row">
                        {currentItems.map(item => (
                            <div key={item.id} className="col-md-4 mb-4">
                                <div 
                                    className="card" 
                                    style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="card-img-top" 
                                        style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: '#4b8a29' }}>{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <Link 
                                            className="btn btn-info" 
                                            to={`/DetailsSL/${type}/${item.id}`}
                                            style={{ backgroundColor: '#4CAF50', borderColor: '#4CAF50' }}
                                        >
                                            Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button 
                                        className="page-link" 
                                        onClick={() => paginate(index + 1)}
                                        style={{
                                            backgroundColor: currentPage === index + 1 ? '#4CAF50' : '#fff',
                                            color: currentPage === index + 1 ? '#fff' : '#4CAF50',
                                            borderColor: '#4CAF50'
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
