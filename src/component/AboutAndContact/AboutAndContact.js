import React from 'react';

function About() {
  const appStyle = {
    height: '50vh',
    backgroundImage: 'url("https://png.pngtree.com/background/20231031/original/pngtree-3d-model-of-compact-garden-tools-set-picture-image_5815830.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '20px',
  };

  return (
    <div>
      <div style={appStyle}>
        <div style={overlayStyle}>
          <h1 className="display-4">About Us</h1>
          <h2 className="display-3">GREEN GROVES</h2>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row align-items-stretch">
          <div className="col-md-6 mb-4">
            <h3 className="text-center mb-4">Trademark GREEN GROVES</h3>
            <ul className="list-unstyled">
              <li>🌱 Behind Green Groves is a small team within FBT.</li>
              <li>🌱 We aim for a carbon-neutral world.</li>
              <li>🌱 We have representatives and branches around the globe.</li>
              <li>🌱 Our Research, Design, and Production departments are all part of our team.</li>
            </ul>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="https://dungcunongnghiep.vn/files/sanpham/670/3/jpg/bo-dung-cu-lam-vuon-mini-3-mon-hm043.jpg"
              alt="Green Groves"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '80%' }}
            />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h4 className="text-center display-4 mb-4">Vision – Mission – Core Values</h4>
        <div className="row text-center">
          <div className="col-md-4">
            <h5>Vision</h5>
            <p>Creating an innovative and sustainable world.</p>
          </div>
          <div className="col-md-4">
            <h5>Mission</h5>
            <p>Providing high-quality battery-powered equipment.</p>
          </div>
          <div className="col-md-4">
            <h5>Core Values</h5>
            <p>Efficiency – Safety – Sustainability</p>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <form onSubmit={e => e.preventDefault()} className="bg-light p-4 rounded shadow">
              <h2 className="text-center mb-4">Contact</h2>
              <hr />
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name<span className="text-danger">*</span></label>
                <input type="text" name="name" id="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email <span className="text-danger">*</span></label>
                <input type="email" name="email" id="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender<span className="text-danger">*</span></label>
                <div className="d-flex justify-content-around">
                  <div className="form-check">
                    <input type="radio" name="gender" id="gMale" className="form-check-input" value="male" />
                    <label htmlFor="gMale" className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" name="gender" id="gFemale" className="form-check-input" value="female" />
                    <label htmlFor="gFemale" className="form-check-label">Female</label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location<span className="text-danger">*</span></label>
                <select name="location" id="location" className="form-select" required>
                  <option value="">Select a location</option>
                  <option value="Nha Trang">Nha Trang</option>
                  <option value="Phu Quoc">Phu Quoc</option>
                  <option value="Da Nang-Hue-Hoi An">Da Nang-Hue-Hoi An</option>
                  <option value="Ha Long">Ha Long</option>
                  <option value="Da Lat">Da Lat</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone<span className="text-danger">*</span></label>
                <input type="text" name="phone" id="phone" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="commt" className="form-label">Comment<span className="text-danger">*</span></label>
                <textarea name="commt" id="commt" className="form-control" required placeholder="Input your answer"></textarea>
              </div>
              <button className="btn btn-danger w-100">
                Submit Question
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3253163053178!2d106.66372207480508!3d10.786376989362989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1728996163781!5m2!1svi!2s"
              width="100%"
              height={450}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            />
            {/* Thêm trường hiển thị tọa độ */}
            <div className="text-center mt-3">
              <div className="alert alert-info">
                <strong>Location</strong>
                <div className="d-flex justify-content-center align-items-center">
                  <marquee behavior="scroll" direction="left" scrollamount="5">
                    <span className="mx-3">Latitude: <strong>10.786377</strong></span>
                    <span className="mx-3">Longitude: <strong>106.6643835</strong></span>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
