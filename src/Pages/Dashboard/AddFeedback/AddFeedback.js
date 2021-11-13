import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';

const AddFeedback = () => {
    const { user } = useAuth()
    console.log(user);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://evening-plateau-86759.herokuapp.com/feedbacks', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data added successfully');
                    reset();
                }
            })

    }

    return (
        <div className="bookingBG">
            <h3>Give Your Feedback</h3>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="custom-field-style" {...register("name")} defaultValue={user?.displayName} />
                <br />
                <textarea className="custom-field-style" {...register("say")} placeholder="Your Say about us" />
                <br />
                <input className="custom-field-style" type="number" {...register("ratings", { min: 0, max: 5 })} placeholder="Ratings out of 5" required />
                <br />
                <input className="custom-field-style" {...register("img")} placeholder="Your image url" defaultValue={user?.photoURL} />
                <br />
                <input className="custom-button" type="submit" />
            </form>
        </div>
    );
};

export default AddFeedback;