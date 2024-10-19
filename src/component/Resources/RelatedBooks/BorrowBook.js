import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BorrowBook = () => {
  const { bookTitle } = useParams();
  const [name, setName] = useState('');
  const [ward, setWard] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [specificAddress, setSpecificAddress] = useState('');
  const [days, setDays] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim whitespace from the inputs
    const trimmedName = name.trim();
    const trimmedWard = ward.trim();
    const trimmedDistrict = district.trim();
    const trimmedProvince = province.trim();
    const trimmedSpecificAddress = specificAddress.trim();
    const trimmedDays = days.trim();

    // Regular expression to check for valid name (only letters and spaces)
    const namePattern = /^[A-Za-z\s]+$/;

    // Check for information and provide specific error messages
    if (!trimmedName) {
      setMessage('Full Name cannot be empty!');
      return;
    }

    if (!namePattern.test(trimmedName)) {
      setMessage('Full Name cannot contain numbers or special characters!');
      return;
    }

    if (!trimmedWard) {
      setMessage('Ward/Commune cannot be empty!');
      return;
    }

    if (!trimmedDistrict) {
      setMessage('District cannot be empty!');
      return;
    }

    if (!trimmedProvince) {
      setMessage('Province/City cannot be empty!');
      return;
    }

    if (!trimmedSpecificAddress) {
      setMessage('Specific Address cannot be empty!');
      return;
    }

    if (!trimmedDays) {
      setMessage('Number of Days cannot be empty!');
      return;
    }

    const daysNumber = parseInt(trimmedDays);
    const cost = daysNumber <= 7 ? daysNumber * 2 : daysNumber * 4;
    setMessage(`Successfully registered to borrow the book "${bookTitle}"! Total amount to pay: $${cost}`);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4" style={{ color: '#28a745' }}>{bookTitle}</h1>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name<span className="text-danger">*</span></label>
          <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="ward" className="form-label">Ward/Commune<span className="text-danger">*</span></label>
          <input type="text" id="ward" className="form-control" value={ward} onChange={(e) => setWard(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="district" className="form-label">District<span className="text-danger">*</span></label>
          <input type="text" id="district" className="form-control" value={district} onChange={(e) => setDistrict(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="province" className="form-label">Province/City<span className="text-danger">*</span></label>
          <input type="text" id="province" className="form-control" value={province} onChange={(e) => setProvince(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="specificAddress" className="form-label">Specific Address<span className="text-danger">*</span></label>
          <input type="text" id="specificAddress" className="form-control" value={specificAddress} onChange={(e) => setSpecificAddress(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="days" className="form-label">Number of Days<span className="text-danger">*</span></label>
          <input type="number" id="days" className="form-control" value={days} onChange={(e) => setDays(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Submit</button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
      <Link to="/books" className="btn btn-secondary mt-3">Back to Book List</Link>
    </div>
  );
};

export default BorrowBook;
