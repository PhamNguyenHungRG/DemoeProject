import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserData from '../../json/Account/User.json'; // Đường dẫn đến file JSON

function TopHeader() {
    const his = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [userName, setUserName] = useState('');
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('visitorCount');
        const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
        setVisitorCount(newCount);
        localStorage.setItem('visitorCount', newCount);

        const token = localStorage.getItem('token');
        const avatar = localStorage.getItem('avatar');

        if (token) {
            setIsLoggedIn(true);
            setAvatarUrl(avatar || 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png');

            try {
                const userId = JSON.parse(atob(token.split('.')[1])).id;
                const user = UserData.find(user => user.id === userId);
                if (user) {
                    setUserName(user.name);
                }
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    const fnRemove = () => {
        localStorage.clear();
        his('/');
        window.history.go(0);
    };

    return (
        <header className="py-2" style={{ backgroundColor: "#e8f5e9" }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    {/* Contact Info */}
                    <div className="d-flex me-3 mb-2 mb-md-0">
                        <div className="d-flex align-items-center me-4">
                            <i className="bi bi-telephone-fill me-1" style={{ color: "#388e3c", fontSize: "1.2rem" }}></i>
                            <span style={{ color: "#388e3c", fontWeight: "bold", fontSize: "1rem" }}>0365153119</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-envelope-fill me-1" style={{ color: "#388e3c", fontSize: "1.2rem" }}></i>
                            <span style={{ color: "#388e3c", fontWeight: "bold", fontSize: "1rem" }}>greengroves123@gmail.com</span>
                        </div>
                    </div>

                    {/* Greeting Message */}
                    <div className="text-center me-auto mb-2 mb-md-0">
                        {isLoggedIn && userName && <h5 style={{ color: "#4caf50", margin: 0 }}>Hello, {userName}</h5>}
                    </div>

                    {/* Visitor Count and Avatar Dropdown */}
                    <div className="d-flex align-items-center">
                        <strong className="me-2" style={{ fontSize: "1rem" }}>Visitor Count: {visitorCount}</strong>
                        {isLoggedIn ? (
                            <div className="dropdown">
                                <img
                                    src={avatarUrl}
                                    alt="User Avatar"
                                    className="rounded-circle me-2"
                                    style={{ width: "40px", height: "40px", objectFit: "cover", cursor: "pointer" }}
                                    data-bs-toggle="dropdown"
                                />
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <Link className="dropdown-item" to="/profile">
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={fnRemove}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="d-flex">
                                <Link
                                    to="/Login"
                                    className="btn btn-outline-success btn-sm me-2"
                                    style={{
                                        borderColor: "#388e3c",
                                        color: "#388e3c",
                                        backgroundColor: "#f1f8e9",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/Register"
                                    className="btn btn-success btn-sm"
                                    style={{
                                        backgroundColor: "#388e3c",
                                        color: "#fff",
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopHeader;
