import { Link } from "react-router-dom";
import './BodyHeader.css';

function BodyHeader() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light body-header-navbar">
                <div className="container-fluid">
                    {/* Logo và tên thương hiệu */}
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <img
                            src="/LogoGreenGroves.jpg"
                            alt="Green Groves Logo"
                            className="logo"
                        />
                        <span className="brand-name">Green Groves</span>
                    </Link>

                    {/* Toggler cho mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links điều hướng */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link animated-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle animated-link" to="#" id="gardeningInfoDropdown" role="button" data-bs-toggle="dropdown">
                                    Gardening Info
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/AvsG">Articles & Guides</Link></li>
                                    <li><Link className="dropdown-item" to="#">Improvement Tips</Link></li>
                                    <li><Link className="dropdown-item" to="/ToolsList">Tool List</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle animated-link" to="#" id="essentialsDropdown" role="button" data-bs-toggle="dropdown">
                                    Essentials
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/SoilAndFertilizers">Soil & Fertilizers</Link></li>
                                    <li><Link className="dropdown-item" to="/Pesticides">Pesticides</Link></li>
                                    <li><Link className="dropdown-item" to="/ListSeeds">Seeds</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="containersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pots &amp; Accessories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="containersDropdown">
                                    <li><a className="dropdown-item" href="#">Pots &amp; Containers</a></li>
                                    <li><a className="dropdown-item" href="#">Accessories</a></li>
                                    <li><a className="dropdown-item" href="#">Decorative Rocks</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle animated-link" to="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown">
                                    Resources
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/ProductSuggestion">Product Suggestions</Link></li>
                                    <li><Link className="dropdown-item" to="/ListVideo">Educational Videos</Link></li>
                                    <li><Link className="dropdown-item" to="/BookList">Related Books</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link animated-link" to="/AboutAndContact">About & Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default BodyHeader;
