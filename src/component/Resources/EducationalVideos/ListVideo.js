import React, { useState } from 'react';
import Videos from '../../../json/Resources/EducationVideos/VideoData.json';
import { Pagination } from 'react-bootstrap'; // Nhập Pagination từ react-bootstrap

function VideoCard({ video }) {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        margin: '20px',
        padding: '10px',
        backgroundColor: '#fff',
        transition: 'transform 0.3s',
        textAlign: 'center',
        width: '300px',
    };

    const titleStyle = {
        fontSize: '1.5rem',
        marginBottom: '10px',
        color: '#333',
    };

    const iframeStyle = {
        width: '100%',
        height: '200px',
        border: 'none',
        borderRadius: '5px',
    };

    const descriptionStyle = {
        fontSize: '1rem',
        color: '#666',
        marginTop: '10px',
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <h3 style={titleStyle}>{video.title}</h3>
            <iframe
                src={video.url}
                title={video.title}
                style={iframeStyle}
                allowFullScreen
            ></iframe>
            <p style={descriptionStyle}>{video.description}</p>
        </div>
    );
}

function ListVideo() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const videosPerPage = 6; // Số video hiển thị trên mỗi trang

    const filteredVideos = Videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Tính toán chỉ số của video hiển thị
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);

    // Tính tổng số trang
    const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

    return (
        <div className="App">
            <header>
                <h1>Gardening Video Tutorials</h1>
                <p>Learn gardening with these beginner-friendly videos</p>
            </header>
            <main>
                <div>
                    <input
                        type="text"
                        placeholder="Tìm kiếm video..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        style={{
                            margin: '20px auto',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            width: '300px',
                            fontSize: '1rem',
                            display: 'block',
                        }}
                    />
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {currentVideos.length > 0 ? (
                            currentVideos.map(video => (
                                <VideoCard key={video.id} video={video} />
                            ))
                        ) : (
                            <p>Không tìm thấy video nào.</p>
                        )}
                    </div>
                    {/* Thêm phân trang */}
                    <Pagination className="justify-content-center mt-4">
                        <Pagination.Prev onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} />
                        {[...Array(totalPages)].map((_, index) => (
                            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} />
                    </Pagination>
                </div>
            </main>
        </div>
    );
}

export default ListVideo;
