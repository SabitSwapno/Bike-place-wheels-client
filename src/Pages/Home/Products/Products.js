import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../ExploreServices/Product';

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://evening-plateau-86759.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <div className="container" id="products">
                <h3 style={{
                    width: "25%",
                    backgroundColor: "#ee163b",
                    color: 'white',
                    padding: "8px",
                    fontWeight: 500,
                    borderRadius: "5px",

                }}>Our Products</h3>
                <h1 style={{
                    color: "#0f0c2f",
                    fontWeight: 700,
                }}>This is Our Display</h1>
                <div className="my-3 row g-3">
                    {
                        product.slice(0, 6).map(product => <Product
                            key={product.key}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div>
                <Link to="/exploreservice" style={{
                    textDecoration: "none",
                    fontSize: "30px",
                    color: "rgb(95, 95, 95)",
                    fontWeight: 500,
                    margin: "10px",
                    display: "block"
                }}>-- Click Here To Explore--</Link>
            </div>
        </>
    );
};

export default Products;