import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function SiteMap() {
    const [isOpen, setIsOpen] = useState(false);
    const sitemapRef = useRef(null);

    // Toggle mở/đóng site map
    const toggleSiteMap = () => {
        setIsOpen((prev) => !prev);
    };

    // Đóng site map khi nhấn ra ngoài phạm vi
    const handleClickOutside = (event) => {
        if (sitemapRef.current && !sitemapRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Lắng nghe sự kiện nhấn chuột bên ngoài khi site map mở
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Inline CSS styles
    const styles = {
        sitemapIcon: {
            position: 'fixed',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            backgroundColor: '#4CAF50',
            padding: '12px',
            borderRadius: '0 8px 8px 0',
            cursor: 'pointer',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
        },
        sitemapIconImg: {
            width: '28px',
            height: '28px',
        },
        sitemapContainer: {
            position: 'fixed',
            top: 0,
            left: isOpen ? '0' : '-320px',
            width: '300px',
            height: '100%',
            backgroundColor: '#ffffff',
            padding: '20px',
            transition: 'left 0.4s ease',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.15)',
            zIndex: 999,
            overflowY: 'auto',
        },
        sitemapHeading: {
            fontSize: '24px',
            marginBottom: '20px',
            color: '#2F4F4F',
            fontWeight: 'bold',
        },
        sitemapList: {
            listStyleType: 'none',
            padding: 0,
        },
        sitemapListItem: {
            marginBottom: '12px',
        },
        sitemapLink: {
            color: '#2F4F4F',
            textDecoration: 'none',
            fontSize: '18px',
            transition: 'color 0.3s ease',
        },
        dropdownMenu: {
            marginLeft: '15px',
            listStyleType: 'none',
            padding: '8px 0',
        },
        dropdownLink: {
            color: '#4CAF50',
            textDecoration: 'none',
            fontSize: '16px',
        },
        closeBtn: {
            position: 'absolute',
            top: '15px',
            right: '20px',
            fontSize: '22px',
            cursor: 'pointer',
        }
    };

    return (
        <nav aria-label="Site Map">
            {/* Biểu tượng site map */}
            <div 
                style={styles.sitemapIcon} 
                onClick={toggleSiteMap} 
                role="button" 
                aria-expanded={isOpen} 
                aria-controls="sitemap-container"
            >
                <img
                    src={`${process.env.PUBLIC_URL}/sitemap-icon.png`}
                    alt="Sitemap Icon"
                    style={styles.sitemapIconImg}
                />
            </div>

            {/* Container site map */}
            <div id="sitemap-container" ref={sitemapRef} style={styles.sitemapContainer}>
                <span 
                    style={styles.closeBtn} 
                    onClick={toggleSiteMap} 
                    aria-label="Close site map">&times;</span>
                <h2 style={styles.sitemapHeading}>Website Sitemap</h2>
                <ul style={styles.sitemapList}>
                    <li style={styles.sitemapListItem}>
                        <Link to="/" style={styles.sitemapLink}>Home</Link>
                    </li>
                    
                    <li style={styles.sitemapListItem}>
                        <span style={styles.sitemapLink}>Gardening Info</span>
                        <ul style={styles.dropdownMenu}>
                            <li><Link to="/AvsG" style={styles.dropdownLink}>Articles & Guides</Link></li>
                            <li><Link to="/Tips" style={styles.dropdownLink}>Improvement Tips</Link></li>
                            <li><Link to="/ToolsList" style={styles.dropdownLink}>Tool List</Link></li>
                        </ul>
                    </li>

                    <li style={styles.sitemapListItem}>
                        <span style={styles.sitemapLink}>Essentials</span>
                        <ul style={styles.dropdownMenu}>
                            <li><Link to="/SoilAndFertilizers" style={styles.dropdownLink}>Soil & Fertilizers</Link></li>
                            <li><Link to="/Pesticides" style={styles.dropdownLink}>Pesticides</Link></li>
                            <li><Link to="/ListSeeds" style={styles.dropdownLink}>Seeds</Link></li>
                        </ul>
                    </li>

                    <li style={styles.sitemapListItem}>
                        <span style={styles.sitemapLink}>Pots & Accessories</span>
                        <ul style={styles.dropdownMenu}>
                            <li><Link to="/ListPAC" style={styles.dropdownLink}>Pots & Containers</Link></li>
                            <li><Link to="#" style={styles.dropdownLink}>Accessories</Link></li>
                            <li><Link to="#" style={styles.dropdownLink}>Decorative Rocks</Link></li>
                        </ul>
                    </li>

                    <li style={styles.sitemapListItem}>
                        <span style={styles.sitemapLink}>Resources</span>
                        <ul style={styles.dropdownMenu}>
                            <li><Link to="/ProductSuggestion" style={styles.dropdownLink}>Product Suggestions</Link></li>
                            <li><Link to="/ListVideo" style={styles.dropdownLink}>Educational Videos</Link></li>
                            <li><Link to="/BookList" style={styles.dropdownLink}>Related Books</Link></li>
                        </ul>
                    </li>

                    <li style={styles.sitemapListItem}>
                        <Link to="/AboutAndContact" style={styles.sitemapLink}>About & Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SiteMap;
