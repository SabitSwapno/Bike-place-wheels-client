import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Product from './Product';

const ExploreServices = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://evening-plateau-86759.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <Header></Header>
            <div className="container">
                <h3 style={{
                    width: "25%",
                    backgroundColor: "#ee163b",
                    color: 'white',
                    padding: "8px",
                    fontWeight: 500,
                    borderRadius: "5px",

                }}>Our Collections</h3>
                <h1 style={{
                    color: "#0f0c2f",
                    fontWeight: 700,
                    marginBottom: "20px"
                }}>What We Have</h1>
                <p>There are many variations of MotorCycles are available,
                    <br /> Here you can see those and choose.</p>
                <div className="my-5 row g-3">
                    {
                        product.map(product => <Product
                            key={product.key}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ExploreServices;