import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
            <Header></Header>
            <div className="aboutUsBG p-5">
                <div className="container ">
                    <div className=" row d-flex align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <img className="img-fluid" src="https://i.ibb.co/pbS3N5C/3054191.jpg" alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h1 style={{
                                color: "#0f0c2f",
                                fontWeight: 700,
                            }}>People choose us because of our service</h1>
                            <p>Research has shown that 70% of buying experiences are based on how the customer feels they have been treated.</p>
                            <div className="aboutUsDiv">
                                <h4>Latest Collections</h4>
                                <p>Our Connection made that happend cause life is not about waiting for the storms to pass: it’s about learning how to ride in the rain.</p>
                            </div>
                            <div className="aboutUsDiv">
                                <h4>Stunning Design</h4>
                                <p>We work on diverse projects for top brands as well as for cool startups.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;