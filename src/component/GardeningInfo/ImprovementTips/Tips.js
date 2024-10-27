import React from "react";
import TipsData from "../../../json/GardeningInfo/Tips.json"

function Tips() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "#2E8B57" }}>
        Gardening Tips
      </h2>
      <div className="row">
        {TipsData.map((tip) => (
          <div key={tip.id} className="col-lg-4 col-md-6 mb-4">
            <div
              className="card shadow-sm border-light rounded animate__animated animate__fadeIn"
              style={{ transition: "transform 0.2s" }}
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="card-img-top"
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: ".25rem",
                  borderTopRightRadius: ".25rem",
                }}
              />
              <div
                className="card-body d-flex flex-column"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <h5 className="card-title text-primary">{tip.title}</h5>
                <p className="card-text text-muted">{tip.description}</p>
                <p className="card-text">{tip.tips}</p>
                <a href="#" className="btn btn-success mt-auto">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
