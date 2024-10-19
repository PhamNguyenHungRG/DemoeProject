import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SoilAndFertilizers from '../../../json/Essentials/SoilAndFertilizers.json'; // JSON file path

function DetailsSL() {
    const { type, id } = useParams();
    const navigate = useNavigate(); // Hook for navigating programmatically
    const item = SoilAndFertilizers[type]?.find(item => item.id === parseInt(id));

    if (!item) {
        return <h2 className="text-center">Item not found!</h2>;
    }

    return (
        <div style={{ marginTop: '30px', padding: '20px' }}>
            <div className="row">
                {/* Image Section */}
                <div className="col-md-6 mb-4">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{
                            maxHeight: '500px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>

                {/* Details Section */}
                <div className="col-md-6">
                    <h1
                        style={{
                            color: '#4b8a29',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                        }}
                    >
                        {item.name}
                    </h1>
                    <div style={{ lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Description:</strong> {item.description}
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Benefits:</strong> {item.benefits}
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Usage:</strong> {item.usage}
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Tips:</strong> {item.tips}
                        </p>
                        <p>
                            <strong>Care Instructions:</strong> {item.careInstructions}
                        </p>
                    </div>
                    
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)} // Navigate back to the previous page
                        style={{
                            marginTop: '20px',
                            backgroundColor: '#4b8a29',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailsSL;
