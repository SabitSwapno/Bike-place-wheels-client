import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddAProduct = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://evening-plateau-86759.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data added successfully');
                    reset();
                }
            })

    }

    return (
        <div className="bookingBG">
            <h3>Add A Product</h3>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="custom-field-style" {...register("name")} placeholder="Product Name" />
                <br />
                <textarea className="custom-field-style" {...register("description")} placeholder="Add Description" />
                <br />
                <input className="custom-field-style" type="number" {...register("price")} placeholder="Price" />
                <br />
                <input className="custom-field-style" {...register("img")} placeholder="Image url" />
                <br />
                <input className="custom-button" type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;