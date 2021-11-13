import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import './Buying.css'

const Buying = () => {
    const { serviceId } = useParams()
    const [bike, setBike] = useState()
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://evening-plateau-86759.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Successfully booked");
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://evening-plateau-86759.herokuapp.com/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="container my-5">
                <h3 style={{
                    width: "25%",
                    backgroundColor: "#ee163b",
                    color: 'white',
                    padding: "8px",
                    fontWeight: 500,
                    borderRadius: "5px",

                }}>Almost there</h3>
                <h2 style={{
                    color: "#0f0c2f",
                    fontWeight: 700,
                    margin: "15px auto"
                }}>Buying <span style={{
                    color: "#ee163b"
                }}>{bike?.name}</span>?</h2>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-sm-12">
                        <div className="card-group">
                            <div className="card card-style">
                                <img src={bike?.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{bike?.name}</h5>
                                    <p className="card-text">{bike?.description}</p>
                                    <h6>USD {bike?.price}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 bookingBG">
                        <h3 style={{
                            color: "#0f0c2f",
                            fontWeight: 600,
                        }}>Fill up to book {bike?.name}</h3>
                        <div className="mt-3">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input className="custom-field-style" {...register("name", { required: true, maxLength: 20 })} defaultValue={user?.displayName} />
                                <br />
                                <input className="custom-field-style" {...register("email")} defaultValue={user?.email} />
                                <br />
                                <input className="custom-field-style" {...register("address")} placeholder="Your Address" required />
                                <br />
                                <input className="custom-field-style" {...register("city")} placeholder="City" required />
                                <br />
                                <input className="custom-field-style" {...register("contactNumber")} placeholder="Phone Number" required />
                                <br />
                                <input className="custom-field-style" {...register("productName")} placeholder="Copy the Bike name and paste here!" required />
                                <p>Bike Name : {bike?.name}</p>
                                <br />
                                <input className="custom-button-2" type="submit" />
                            </form>
                            <br />
                            <Link to="/home">
                                <button className="custom-button-3">Go back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Buying;