import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pesticidesData from '../../../json/Essentials/Pesticide.json';

const Pesticides = () => {
    const [pesticides, setPesticides] = useState([]);
    const [filteredPesticides, setFilteredPesticides] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        setPesticides(pesticidesData);
        setFilteredPesticides(pesticidesData);
    }, []);

    const handleTypeChange = (type) => {
        setSelectedType(type);
        setCurrentPage(1);
        if (type === 'All') {
            setFilteredPesticides(pesticides);
        } else {
            const filtered = pesticides.filter(pesticide => pesticide.type === type);
            setFilteredPesticides(filtered);
        }
    };

    // Pagination logic
    const indexOfLastPesticide = currentPage * itemsPerPage;
    const indexOfFirstPesticide = indexOfLastPesticide - itemsPerPage;
    const currentPesticides = filteredPesticides.slice(indexOfFirstPesticide, indexOfLastPesticide);
    const totalPages = Math.ceil(filteredPesticides.length / itemsPerPage);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4" style={{ color: '#2E8B57' }}>Pesticides</h2>
            <div className="row">
                <div className="col-md-3">
                    <h5 style={{ color: '#2E8B57' }}>Filter by Type</h5>
                    <div className="list-group">
                        <button
                            className={`list-group-item list-group-item-action ${selectedType === 'All' ? 'active' : ''}`}
                            style={{ backgroundColor: selectedType === 'All' ? '#cce5cc' : '#fff', color: '#2E8B57' }}
                            onClick={() => handleTypeChange('All')}
                        >
                            All
                        </button>
                        <button
                            className={`list-group-item list-group-item-action ${selectedType === 'Chemical' ? 'active' : ''}`}
                            style={{ backgroundColor: selectedType === 'Chemical' ? '#cce5cc' : '#fff', color: '#2E8B57' }}
                            onClick={() => handleTypeChange('Chemical')}
                        >
                            Chemical
                        </button>
                        <button
                            className={`list-group-item list-group-item-action ${selectedType === 'Organic' ? 'active' : ''}`}
                            style={{ backgroundColor: selectedType === 'Organic' ? '#cce5cc' : '#fff', color: '#2E8B57' }}
                            onClick={() => handleTypeChange('Organic')}
                        >
                            Organic
                        </button>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {currentPesticides.map((pesticide) => (
                            <div className="col-md-4 mb-4" key={pesticide.id}>
                                <div className="card h-100 border-success">
                                    <img src={pesticide.image} className="card-img-top" alt={pesticide.name} style={{ height: '150px', objectFit: 'contain' }} />
                                    <div className="card-body d-flex flex-column" style={{ backgroundColor: '#f8f9fa' }}>
                                        <h5 className="card-title" style={{ color: '#2E8B57' }}>{pesticide.name}</h5>
                                        <p className="card-text">Type: <span style={{ fontWeight: 'bold' }}>{pesticide.type}</span></p>
                                        <p className="card-text">Rating: <span style={{ fontWeight: 'bold' }}>{pesticide.rating} ★</span></p>
                                        <Link to={`/pesticides/${pesticide.id}`} className="btn btn-success mt-auto">Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination Controls */}
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pesticides;
