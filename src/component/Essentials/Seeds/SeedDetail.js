import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import seedsData from '../../../json/Essentials/Seeds.json'; // Path to Seeds.json

const SeedDetail = () => {
  const { id } = useParams(); // Get the seed ID from the URL parameters
  const seed = seedsData.find(seed => seed.id === parseInt(id)); // Find the seed by ID
  const navigate = useNavigate(); // Hook to navigate back

  if (!seed) {
    return <div className="container my-5"><h2 className="text-center">Seed not found!</h2></div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{seed.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={seed.imgUrl}
            className="img-fluid rounded shadow"
            alt={seed.name}
            style={{ height: '300px', objectFit: 'cover' }} // Ensure the image does not distort
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h5 className="mb-3">Description</h5>
          <p className="text-muted">{seed.description.Information}</p>
          <h5 className="mt-4 mb-3">Instructions</h5>
          <p className="text-muted">{seed.description.instruct}</p>
        </div>
      </div>
      <h5 className="mt-4">Watch the Video</h5>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${seed.videoUrl.split('v=')[1]}`} // Trích xuất ID của video từ URL
          title={`Video for ${seed.name}`}
          allowFullScreen
          style={{ width: '100%', height: '400px' }} // Điều chỉnh chiều cao nếu cần
        />
      </div>

      {/* Back button */}
      <div className="mt-4">
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default SeedDetail;
