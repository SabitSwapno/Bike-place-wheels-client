import React, { useEffect, useState } from 'react';
import Feedback from './FeedBack/Feedback';


const FeedBacks = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch('https://evening-plateau-86759.herokuapp.com/feedbacks')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])
    return (
        <div className="container">
            <h3 style={{
                width: "25%",
                backgroundColor: "#ee163b",
                color: 'white',
                padding: "8px",
                fontWeight: 500,
                borderRadius: "5px",

            }}>Feedbacks</h3>
            <h1 style={{
                color: "#0f0c2f",
                fontWeight: 700,
            }}>Our Clients Feedback</h1>
            <div className="row g-3 my-3">
                {
                    feedback.map(feedback => <Feedback
                        key={feedback.name}
                        feedback={feedback}
                    ></Feedback>)
                }
            </div>
        </div>
    );
};

export default FeedBacks;