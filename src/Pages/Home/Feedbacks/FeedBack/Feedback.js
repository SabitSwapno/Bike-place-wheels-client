import React from 'react';
import Rating from 'react-rating';
import './Feedback.css';


const Feedback = (props) => {
    const { name, say, img, ratings } = props.feedback;
    return (
        <div className="col-md-6 col-sm-12 col-lg-4 ">
            <div className="card feedback-card-style">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{say}</p>
                    <h6><Rating
                        initialRating={ratings}
                        readonly emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star"
                        style={{
                            color: "#F8AE01"
                        }}
                    ></Rating></h6>
                </div>
            </div>
        </div>
    );
};

export default Feedback;