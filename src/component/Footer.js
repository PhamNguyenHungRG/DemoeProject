function Footer() {
    return (
        <footer className="bg-success text-white py-5">
            <div className="container">
                <div className="row text-center text-md-start">
                    {/* Brand and About Us Section */}
                    <div className="col-md-4 mb-4">
                        <h5>Green Groves</h5>
                        <p>At Green Groves, we empower balcony gardening enthusiasts with knowledge, tips, and resources to grow their own little green haven.</p>
                        <p><strong>Phone:</strong> 0365153119</p>
                        <p><strong>Email:</strong> greengroves123@gmail.com</p>
                    </div>
                    {/* Useful Links Section */}
                    <div className="col-md-2 mb-4">
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
                        </ul>
                    </div>
                    {/* Categories Section */}
                    <div className="col-md-2 mb-4">
                        <h5>Categories</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Balcony Plants</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Gardening Tools</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Maintenance Tips</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Indoor Gardening</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Outdoor Gardening</a></li>
                        </ul>
                    </div>
                    {/* Subscribe to Newsletter Section */}
                    <div className="col-md-4 mb-4 text-center text-md-end">
                        <h5>Subscribe to Our Newsletter</h5>
                        <p>Stay updated with the latest balcony gardening tips, ideas, and exclusive offers.</p>
                        <form className="d-flex justify-content-center justify-content-md-end">
                            <input type="email" className="form-control me-2" placeholder="Enter your email" />
                            <button type="submit" className="btn btn-light">Subscribe</button>
                        </form>
                        {/* Social Media Icons */}
                        <div className="mt-4">
                            <h6>Follow Us</h6>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-facebook fa-2x" />
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-instagram fa-2x" />
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-twitter fa-2x" />
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-pinterest fa-2x" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Copyright Section */}
                <div className="text-center mt-4">
                    <p className="mb-0">© 2024 Green Groves. All rights reserved. Designed with love for nature.</p>
                </div>
            </div>
        </footer>



    );
}

export default Footer;