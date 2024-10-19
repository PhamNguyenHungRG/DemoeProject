import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pesticidesData from '../../../json/Essentials/Pesticide.json';

const PesticidesDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const pesticide = pesticidesData.find((p) => p.id === parseInt(id));

    // Handling case where pesticide is not found
    if (!pesticide) {
        return (
            <div className="container mt-4 text-center">
                <h2 className="text-danger">Pesticide information not found</h2>
                <button className="btn btn-success mt-3" onClick={() => navigate('/')}>
                    Go to Home
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-4 mb-5">
            <h2 className="text-center mb-4" style={{ color: '#2E7D32' }}>{pesticide.name}</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <img 
                            src={pesticide.image} 
                            className="card-img-top img-fluid" 
                            alt={pesticide.name} 
                            style={{ maxHeight: '300px', objectFit: 'contain' }} 
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-4 border border-success rounded" style={{ backgroundColor: '#E8F5E9' }}>
                        <h5 className="mb-3" style={{ color: '#2E7D32' }}>Product Introduction:</h5>
                        <p>{pesticide.description.productIntroduction}</p>
                        <h5 className="mb-3" style={{ color: '#2E7D32' }}>Usage Instructions:</h5>
                        <p>{pesticide.description.usageInstructions}</p>
                        <p className="font-weight-bold"><strong>Rating: {pesticide.rating} ★</strong></p>
                        <button 
                            className="btn" 
                            style={{ 
                                backgroundColor: '#2E7D32', // Màu xanh lá cây
                                color: 'white', // Màu chữ trắng
                                border: 'none', // Không viền
                                borderRadius: '5px', // Bo góc
                                padding: '10px 20px', // Padding cho nút
                                transition: 'background-color 0.3s' // Hiệu ứng chuyển màu
                            }} 
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1B5E20'} // Tối màu khi hover
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2E7D32'} // Trở lại màu gốc khi không hover
                            onClick={() => navigate(-1)}>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PesticidesDetail;
