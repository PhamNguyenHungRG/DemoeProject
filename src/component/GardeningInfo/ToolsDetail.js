import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Tools from '../../json/GardeningInfo/ToolsList/Tools.json'; // Đảm bảo đường dẫn chính xác

function ToolsDetail() {
    const { id } = useParams();
    const tool = Tools.find(tool => tool.ID === parseInt(id));

    if (!tool) {
        return <h2 className="text-center mt-5">Tool not found</h2>; // Thông báo nếu công cụ không tồn tại
    }

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4" style={{ color: '#2E8B57' }}>{tool.name}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={tool.imgUrl} 
                        alt={tool.name} 
                        className="img-fluid rounded" 
                        style={{ objectFit: 'cover', height: '300px' }} 
                    />
                </div>
                <div className="col-md-6">
                    <h5 className="text-primary">Category: {tool.category}</h5>
                    <p className="text-muted">Rating: {tool.rating} {renderStars(tool.rating)}</p>
                    <Link to={tool.videoUrl} target="_blank" className="btn btn-success mb-3">Watch Video</Link>
                    <h5 className="mt-4">Description</h5>
                    <p>{tool.content[0].description}</p>
                    <h5>Usage</h5>
                    <p>{tool.content[0].usage}</p>
                    <h5>Material</h5>
                    <p>{tool.content[0].material}</p>
                    <h5>Maintenance</h5>
                    <p>{tool.content[0].maintenance}</p>
                    <Link to="/ToolsList" className="btn btn-outline-primary mt-4">Back to Tools List</Link>
                </div>
            </div>
        </div>
    );
}

// Hàm để hiển thị các ngôi sao dựa trên rating
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const totalStars = 5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <i key={i} className="bi bi-star-fill" style={{ color: '#ffc107', fontSize: '1rem', marginRight: '0.1rem' }}></i>
        );
    }

    if (hasHalfStar) {
        stars.push(
            <i key="half" className="bi bi-star-half" style={{ color: '#ffc107', fontSize: '1rem', marginRight: '0.1rem' }}></i>
        );
    }

    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
        stars.push(
            <i key={i + fullStars} className="bi bi-star" style={{ color: '#ffc107', fontSize: '1rem', marginRight: '0.1rem' }}></i>
        );
    }

    return stars;
};

export default ToolsDetail;
