import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const { _id, name, description, img, price } = props.product
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 ">
            <div className="card card-style">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h6>USD {price}</h6>
                    <Link to={`/buying/${_id}`}>
                        <button className="custom-button">Buy {name}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;