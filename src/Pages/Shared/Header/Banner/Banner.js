import React from 'react';
import { Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Container>
                <div className="my-5 row">
                    <div className="col-md-6 col-sm-12">
                        <img className="img-fluid rounded" src="https://i.ibb.co/SJtMyf0/driving-green-neon-divor-motorcycle-road-1.jpg" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h1
                            style={{
                                color: "#0f0c2f",
                                fontWeight: 700
                            }}>
                            Get Things Done By Our Productions
                        </h1>
                        <p>We produce latest and coolest products in your income and making sure you stay in high demand.
                        </p>
                        <HashLink to="/home#products">
                            <button className="custom-button"
                            >Get Started</button>
                        </HashLink>
                        <br />
                        <div>
                            <button style={{
                                backgroundColor: "#ee163b",
                                border: "none",
                                borderRadius: "10px",
                                color: "white",
                                padding: "5px 8px",
                                marginTop: "10px"
                            }}><i className="fas fa-play"></i></button>
                            <p>Watch our intro video.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Banner;