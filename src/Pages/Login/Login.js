import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Login.css'

const Login = () => {

    const { logInUser, isLoading, user, authError } = useAuth();
    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleOnSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
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
                            <form onSubmit={handleOnSubmit} className="formStyle py-5">
                                <h1 style={{
                                    color: "#0f0c2f",
                                    fontWeight: 700,
                                }}>Login</h1>
                                <p>Your Email</p>
                                <input type="email" name="email" variant="standard" onBlur={handleOnBlur} />
                                <p>Password</p>
                                <input type="password" name="password" variant="standard" onBlur={handleOnBlur} />
                                <br />
                                <button className="custom-button-2 my-3" type="submit">Login Now</button>
                                <p>New to Website?</p>
                                <Link to='./register' style={{
                                    textDecoration: "none",
                                    color: "#ee163b"
                                }}>
                                    Register here
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

export default Login;