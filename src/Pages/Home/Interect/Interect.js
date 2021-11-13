import React from 'react';
import './Interect.css'

const Interect = () => {
    return (
        <div className="interectBG paddings-cus">
            <div className="container text-white">
                <div className="row d-flex justify-content-center align-items-center m-3">
                    <div className="col-md-3 col-sm-6" >
                        <button style={{
                            border: "none",
                            backgroundColor: "white",
                            margin: "20px",
                            color: "#ee163b",
                            padding: "20px",
                            borderRadius: "20px 4px",
                            cursor: "default"

                        }}>
                            <i style={{
                                fontSize: "20px"
                            }} className="far fa-thumbs-up"></i>
                        </button >
                        <h1 style={{
                            fontWeight: "700"
                        }}>100%</h1>
                        <h6 style={{
                            fontWeight: "700"
                        }}>Satisfaction</h6>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <button style={{
                            border: "none",
                            backgroundColor: "white",
                            margin: "20px",
                            color: "#ee163b",
                            padding: "20px",
                            borderRadius: "20px 4px",
                            cursor: "default"

                        }}>
                            <i style={{
                                fontSize: "20px"
                            }} className="fas fa-user-friends"></i>
                        </button>
                        <h1 style={{
                            fontWeight: "700"
                        }}>100K</h1>
                        <h6 style={{
                            fontWeight: "700"
                        }}>Happy Clients</h6>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <button style={{
                            border: "none",
                            backgroundColor: "white",
                            margin: "20px",
                            color: "#ee163b",
                            padding: "20px",
                            borderRadius: "20px 4px",
                            cursor: "default"

                        }}>
                            <i style={{
                                fontSize: "20px"
                            }} className="fas fa-dollar-sign"></i>
                        </button>
                        <h1 style={{
                            fontWeight: "700"
                        }}>500k+</h1>
                        <h6 style={{
                            fontWeight: "700"
                        }}>Investments</h6>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <button style={{
                            border: "none",
                            backgroundColor: "white",
                            margin: "20px",
                            color: "#ee163b",
                            padding: "20px",
                            borderRadius: "20px 4px",
                            cursor: "default"

                        }}>
                            <i style={{
                                fontSize: "20px"
                            }} className="fas fa-trophy"></i>
                        </button>
                        <h1 style={{
                            fontWeight: "700"
                        }}>50+</h1>
                        <h6 style={{
                            fontWeight: "700"
                        }}>Winning Award</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interect;