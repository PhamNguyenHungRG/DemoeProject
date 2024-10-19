import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import users from '../../json/Account/User.json'; // Path to your JSON file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                localStorage.setItem('token', 'fake-jwt-token'); // Store token in localStorage (mock)
                alert('Login successful');
                navigate('/');
                window.history.go(0);
            } else {
                setError('Incorrect email or password');
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div 
            className="container-fluid d-flex justify-content-center align-items-center vh-100" 
            style={{ 
                backgroundImage: 'url("/assets/bg-garden.jpg")', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div 
                className="card p-5 shadow-lg" 
                style={{ 
                    maxWidth: '450px', 
                    width: '100%', 
                    borderRadius: '20px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Transparent background
                }}
            >
                <div className="card-body">
                    <h2 
                        className="text-center mb-4" 
                        style={{ 
                            color: '#4b8a29', 
                            fontWeight: 'bold' 
                        }}
                    >
                        <i className="fas fa-leaf" style={{ color: '#4b8a29', marginRight: '10px' }}></i>
                        Login to Green Groves
                    </h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
                                <i className="fas fa-envelope me-2"></i>Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    borderRadius: '30px',
                                    padding: '12px 15px',
                                    border: '1px solid #ccc',
                                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold' }}>
                                <i className="fas fa-lock me-2"></i>Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{
                                    borderRadius: '30px',
                                    padding: '12px 15px',
                                    border: '1px solid #ccc',
                                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </div>
                        {error && <p className="text-danger text-center mb-4">{error}</p>}
                        <button
                            className="btn btn-primary w-100"
                            style={{
                                backgroundColor: "#4b8a29",
                                borderRadius: "30px",
                                padding: "12px 20px",
                                border: "none",
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                boxShadow: '0 4px 10px rgba(75, 138, 41, 0.2)'
                            }}
                        >
                            <i className="fas fa-sign-in-alt me-2"></i>Login
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/Register"
                            style={{
                                color: '#4b8a29',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                            }}
                        >
                            <i className="fas fa-user-plus me-2"></i>Don't have an account? Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
