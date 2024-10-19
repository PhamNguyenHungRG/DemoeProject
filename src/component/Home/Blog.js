import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogData from '../../json/Home/Blog.json';

const ITEMS_PER_PAGE = 6; // Số lượng blog mỗi trang

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setBlogs(BlogData);
    }, []);

    // Tính toán số trang
    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
    
    // Lấy các blog cần hiển thị cho trang hiện tại
    const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Hàm chuyển trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Blog Posts</h2>
            <div className="row">
                {currentBlogs.map((blog) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={blog.ID}>
                        <div className="card h-100">
                            <img 
                                src={blog.imageUrl} 
                                alt={blog.title} 
                                className="card-img-top" 
                                style={{ height: '200px', objectFit: 'cover' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text"><strong>Category:</strong> {blog.category}</p>
                                <p className="card-text"><strong>Posted by:</strong> {blog.author}</p>
                                <p className="card-text"><strong>Date:</strong> {blog.date}</p>
                                <Link to={`/BlogDetails/${blog.ID}`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Phân trang */}
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mt-4">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                            <button 
                                className="page-link" 
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Blog;
