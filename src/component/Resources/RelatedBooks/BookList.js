import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import books from '../../../json/Resources/RelatedBooks/Book.json';

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6; // Số lượng sách hiển thị mỗi trang

  // Tính tổng số trang
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Lấy sách cho trang hiện tại
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Chuyển trang
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: '#28a745', fontWeight: 'bold' }}>
        Gardening Books List
      </h1>
      <div className="row">
        {currentBooks.map((book, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4 d-flex">
            <div className="card shadow-lg w-100" style={{ borderRadius: '15px', display: 'flex', flexDirection: 'column' }}>
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h5 className="card-title" style={{ color: '#28a745', fontWeight: 'bold' }}>{book.title}</h5>
                <p className="card-text"><strong>Author:</strong> {book.author}</p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn btn-outline-success rounded-pill"
                  style={{
                    borderColor: '#28a745',
                    color: '#28a745',
                    transition: '0.3s',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Buy on Amazon
                </a>
                {/* Nút "Mượn sách" sử dụng Link */}
                <Link
                  to={`/Borrow/${book.title}`} // Điều hướng đến BorrowBook
                  className="btn btn-success mt-2 rounded-pill"
                  style={{
                    transition: '0.3s',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Borrow Book
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
              <button
                className="page-link border-0"
                style={{
                  backgroundColor: page === currentPage ? '#28a745' : 'transparent',
                  color: page === currentPage ? '#fff' : '#28a745',
                  transition: '0.3s',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BookList;
