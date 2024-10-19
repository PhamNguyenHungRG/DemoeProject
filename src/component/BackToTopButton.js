import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`btn btn-floating ${isVisible ? 'visible' : 'invisible'}`}
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        zIndex: 1000,
        borderRadius: '50%',
        padding: '15px', // Increased padding for a larger button
        background: 'linear-gradient(135deg, #66bb6a, #43a047)', // Gradient background
        border: 'none',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.4)', // Stronger shadow for depth
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)'; // Scale effect on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Reset scale on mouse leave
      }}
    >
      <img
        src="https://static.thenounproject.com/png/216360-200.png"
        alt="Back to Top"
        style={{
          width: '50px', // Adjust width as needed
          height: '50px', // Adjust height as needed
        }}
      />
    </button>
  );
};

export default BackToTopButton;
