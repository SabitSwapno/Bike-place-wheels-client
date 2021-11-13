import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="row g-3 pb-4 footerBG">
                <div className="col-md-4 col-sm-12">
                    <h2><span className="custom-color">The Bike Place</span> & Wheels.</h2>
                    <h6>Making the world a better place through producing elegant consequence.</h6>
                    <HashLink to="/home#products">
                        <button style={{
                            border: "none",
                            backgroundColor: "#ee163b",
                            color: "white",
                            fontWeight: "500",
                            padding: "10px 15px",
                            borderRadius: "15px 4px"
                        }}><i className="fas fa-arrow-up"></i></button>
                    </HashLink>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h5>SPECIAL SERVICES</h5>
                    <h6>Create a strong and lasting first impression on our potential clients.</h6>
                    <button className="btn btn-outline-light">Make an Appointment</button>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h5>VISIT OUR OFFICE</h5>
                    <h6>17361 Khocukhet Street Fountain, CA 92708, Phone: (714) 556-3171 Fax: (714) 907657</h6>
                    <button className="btn btn-outline-light">Get Directions</button>
                </div>
            </div>
            <div style={{
                backgroundColor: "#ee163b",
                paddingTop: "25px",
                paddingBottom: "20px",
                borderRadius: "2px",
                color: "white",
                fontWeight: "500"
            }}>
                <h6>Developed by The Bike Place and Wheels</h6>
            </div>
        </>
    );
};

export default Footer;