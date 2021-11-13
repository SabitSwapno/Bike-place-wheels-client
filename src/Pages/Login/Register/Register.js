import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Register = () => {
    const { registerUser, isLoading, user, authError } = useAuth();

    const [loginData, setLoginData] = useState({})
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert("password didn't matched")
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

    }


    return (
        <>
            <Header></Header>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img style={{
                            boxShadow: "0px 10px 30px #00000017"
                        }} className="img-fluid" src="https://i.ibb.co/5sZqLxH/3227472.jpg" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {!isLoading &&
                            <form onSubmit={handleOnSubmit} className="formStyle py-4">
                                <h1 style={{
                                    color: "#0f0c2f",
                                    fontWeight: 700,
                                }}>Register</h1>
                                <p>Your Name</p>
                                <input type="text" name="name" variant="standard" onBlur={handleOnBlur} />
                                <p>Your Email</p>
                                <input type="email" name="email" variant="standard" onBlur={handleOnBlur} />
                                <p>Password</p>
                                <input type="password" name="password" variant="standard" onBlur={handleOnBlur} />
                                <p>ReType Password</p>
                                <input type="password"
                                    name="password2"
                                    onBlur={handleOnBlur} />
                                <br />
                                <button className="custom-button-2 my-3" type="submit">Register Now</button>
                                <p>Already have an Account?</p>
                                <Link to='./login' style={{
                                    textDecoration: "none",
                                    color: "#ee163b"
                                }}>
                                    Login here
                                </Link>
                            </form>}
                        {
                            isLoading && <Spinner animation="border" variant="danger" />
                        }
                        {

                            user?.email && <div class="alert alert-success" role="alert">
                                Successfully Registered
                            </div>
                        }
                        {
                            authError && <div class="alert alert-danger" role="alert">
                                {authError}
                            </div>

                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;