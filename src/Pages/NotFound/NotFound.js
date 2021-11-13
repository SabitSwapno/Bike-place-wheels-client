import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src="https://i.ibb.co/qJVc9dZ/Error-with-glitch-effect-on-screen-Error-404-page-not-found-Flat-design-modern-vector-illustration-c.jpg" alt="" />
            <br />
            <Link to="/home">
                <button className="custom-button"
                >Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;