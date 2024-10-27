import React, { useState, useEffect } from 'react';
import potsContainersData from '../../../json/PotsAndAcessories/PAC.json';



function ListPAC() {
    const [potsContainers, setPotsContainers] = useState([]);

    useEffect(() => {
        setPotsContainers(potsContainersData);
    }, []);
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Pots and Containers for Balcony Gardening</h2>
            <div className="row">
                {potsContainers.map((item) => (
                    <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={item.imgUrl}
                                className="card-img-top"
                                alt={item.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text"><strong>Size:</strong> {item.size}</p>
                                <p className="card-text"><strong>Price:</strong> {item.price}</p>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListPAC;