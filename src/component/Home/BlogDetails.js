import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogData from '../../json/Home/Blog.json';

function BlogDetails() {
    const { id } = useParams(); // Lấy ID từ URL
    const blog = BlogData.find((b) => b.ID === parseInt(id)); // Tìm blog dựa trên ID

    // Kiểm tra nếu blog không tồn tại
    if (!blog) {
        return <h2 className="text-danger text-center mt-5">Blog not found</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-lg mb-4">
                <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="card-img-top img-fluid" 
                    style={{ height: '400px', objectFit: 'cover' }} 
                />
                <div className="card-body">
                    <h2 className="card-title text-success text-center">{blog.title}</h2>
                    <div className="text-center mb-3">
                        <span className="badge bg-info">{blog.category}</span>
                        <span className="badge bg-secondary mx-2">{blog.author}</span>
                        <span className="badge bg-light text-dark">{blog.date}</span>
                    </div>
                    <h5 className="text-primary">Content</h5>
                    <div className="row">
                        {blog.content.map((section, index) => (
                            <div key={index} className="col-12 mb-4">
                                <div className="bg-light p-3 rounded shadow-sm">
                                    <h6 className="text-info">{section.section}</h6>
                                    <p className="text-dark">{section.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link className="btn btn-primary" to="/">Share</Link>
                        <Link className="btn btn-secondary ms-2" to="/">Back to Blogs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
