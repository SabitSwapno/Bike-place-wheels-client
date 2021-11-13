import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" expand="lg" className="navsize" sticky="top">
                <Container>
                    <Navbar.Brand
                        style={{
                            fontSize: "25px",
                            fontWeight: "600",
                            color: "#0f0c2f"
                        }}
                        href="/home"><span className="custom-color">The Bike Place</span> & Wheels.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} style={{
                                fontWeight: "500",
                            }}
                                to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} style={{
                                fontWeight: "500",
                            }}
                                to="/exploreservice">Explore</Nav.Link>
                            <Nav.Link as={Link}
                                style={{
                                    fontWeight: "500"
                                }}
                                to="/aboutus">About Us</Nav.Link>
                            {user?.email ?
                                <div>
                                    <button className="btn btn-light" onClick={logOut}>LogOut</button>
                                    <Link style={{
                                        fontWeight: "500",
                                        textDecoration: "none",
                                        color: "rgba(0,0,0,.55)"
                                    }}
                                        to="/dashboard">Dashboard
                                    </Link>
                                </div> :
                                <Nav.Link as={Link}
                                    style={{
                                        fontWeight: "500"
                                    }}
                                    to="/login">Log In</Nav.Link>}
                        </Nav>
                        <Navbar.Text style={{
                            fontWeight: "500"
                        }}>
                            Signed in as: <a href="#login">{
                                user?.email ? user.displayName : ''
                            }</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;