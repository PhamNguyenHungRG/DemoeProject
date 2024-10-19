import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import seedsData from '../../../json/Essentials/Seeds.json'; 

const ListSeeds = () => {
  const itemsPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  const filteredSeeds = selectedCategory 
    ? seedsData.filter(seed => seed.category === selectedCategory) 
    : seedsData;
  
  const totalPages = Math.ceil(filteredSeeds.length / itemsPerPage);
  const currentSeeds = filteredSeeds.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const categories = [...new Set(seedsData.map(seed => seed.category))];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); 
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-success">Seeds for Your Garden</h1>
      <div className="row">
        <div className="col-md-3">
          <div className="bg-light p-3 rounded shadow-sm">
            <h5 className="text-center text-success">Categories</h5>
            <ul className="list-group list-group-flush">
              <li 
                className={`list-group-item list-group-item-action ${!selectedCategory ? 'active bg-success text-white' : ''}`} 
                onClick={() => handleCategorySelect(null)}
                style={{ cursor: 'pointer' }}
              >
                All
              </li>
              {categories.map((category, index) => (
                <li 
                  className={`list-group-item list-group-item-action ${selectedCategory === category ? 'active bg-success text-white' : ''}`} 
                  key={index} 
                  onClick={() => handleCategorySelect(category)}
                  style={{ cursor: 'pointer' }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {currentSeeds.map((seed) => (
              <div className="col-lg-4 col-md-6 mb-4" key={seed.id}>
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={seed.imgUrl}
                    className="card-img-top"
                    alt={seed.name}
                    style={{ height: '200px', objectFit: 'cover', borderRadius: '5px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-success">{seed.name}</h5>
                    <p className="card-text text-truncate">{seed.description.Information}</p>
                    <p className="card-text"><strong>Instructions:</strong> {seed.description.instruct}</p>
                    <Link 
                      to={`/Seeds/${seed.id}`} 
                      className="btn btn-success mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <nav>
            <ul className="pagination justify-content-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(index + 1)}>
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
};

export default ListSeeds;
