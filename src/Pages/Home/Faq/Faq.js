import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
    return (
        <div className="container">
            <h3 style={{
                width: "25%",
                backgroundColor: "#ee163b",
                color: 'white',
                padding: "8px",
                fontWeight: 500,
                borderRadius: "5px",
                marginBottom: "20px",

            }}>FAQS</h3>
            <h1 style={{
                color: "#0f0c2f",
                fontWeight: 700,
            }}>Frequiently Asked Questions</h1>
            <div className="row my-5 d-flex align-items-center">
                <div className="col-md-6 col-sm-12">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="borders">Which is the fastest bike in the world?</Accordion.Header>
                            <Accordion.Body className="borders">
                                The Ninja H2R can reach up to speeds of a whopping 400 km/h. Its power to weight ratio is 1.48 hp/kg which is the highest among any production bike in the world. The Kawasaki Ninja H2R is the fastest bike in the world as no other bike comes close to this supercharged monster
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="borders">How do I pick the right bike?</Accordion.Header>
                            <Accordion.Body className="borders">
                                <ul>
                                    <li>Choose the right bike type based on your needs.</li>
                                    <li>Calculate how much you want to spend.</li>
                                    <li>Make sure your bike fits you.</li>
                                    <li>Know Your Gears, Suspension, and Brake Type.</li>
                                    <li>Adjust the fit and go for a test ride.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="borders">Which is the world No 1 bike company?</Accordion.Header>
                            <Accordion.Body className="borders">
                                Honda is currently the largest motorcycle manufacturer in the world.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src="https://i.ibb.co/bKMn5fq/4804.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;