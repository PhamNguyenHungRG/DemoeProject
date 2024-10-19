import React, { useState, useEffect } from 'react'; 
import bannerData from '../../json/Home/Banner.json'; // Nhập file JSON

function Banner() {
    const images = bannerData.map(image => image.src); // Lấy danh sách URL từ JSON

    const [currentIndex, setCurrentIndex] = useState(0);

    // Chuyển ảnh tự động sau mỗi 3 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Thời gian chuyển đổi mỗi 3 giây

        return () => clearInterval(interval);
    }, [images.length]);

    // Hàm chuyển ảnh tiếp theo
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Hàm chuyển ảnh trước đó
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Banner fixed size with wider width
    const bannerStyle = {
        width: '95%', // Tăng chiều rộng lên 95% để phù hợp với màn hình rộng
        maxWidth: '1200px', // Đặt giới hạn chiều rộng tối đa để không quá lớn trên màn hình lớn
        height: '450px', // Đảm bảo chiều cao cố định nhưng giữ tỷ lệ
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4', // Màu nền nhẹ
        borderRadius: '10px', // Bo góc nhẹ
        margin: '0 auto', // Căn giữa banner
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Giữ hình ảnh cân đối, không bị bể
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    // Button styles for better visibility
    const buttonStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Nền bán trong suốt
        border: '2px solid white', // Viền trắng mỏng để làm nổi bật
        color: '#fff',
        cursor: 'pointer',
        borderRadius: '50%', // Bo tròn nút
        width: '45px',
        height: '45px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        transition: 'background-color 0.3s', // Hiệu ứng hover mượt
    };

    const prevButtonStyle = {
        ...buttonStyle,
        left: '20px' // Đặt nút Previous sang trái
    };

    const nextButtonStyle = {
        ...buttonStyle,
        right: '20px' // Đặt nút Next sang phải
    };

    // Hover effect
    const buttonHoverStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Làm nút đậm hơn khi hover
    };

    return (
        <div id="banner" className="carousel slide" data-bs-interval="false" style={bannerStyle}>
            <div className="carousel-inner" style={{ width: '100%', height: '100%' }}>
                {images.map((image, index) => (
                    <div
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`} 
                        key={index}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <img 
                            src={image} 
                            alt={`Banner ${index + 1}`} 
                            style={imageStyle}
                        />
                    </div>
                ))}
            </div>
            {/* Nút Previous */}
            <button
                className="carousel-control-prev"
                type="button"
                onClick={prevSlide}
                aria-label="Previous"
                style={prevButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ fontSize: '25px' }}>‹</span>
                <span className="visually-hidden">Previous</span>
            </button>
            {/* Nút Next */}
            <button
                className="carousel-control-next"
                type="button"
                onClick={nextSlide}
                aria-label="Next"
                style={nextButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ fontSize: '25px' }}>›</span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;
