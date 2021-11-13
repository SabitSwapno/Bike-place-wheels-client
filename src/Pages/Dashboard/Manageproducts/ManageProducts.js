import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://evening-plateau-86759.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])

    const handleDeleteUser = id => {
        const confirmation = window.confirm('Are you sure, you want to delete?');
        if (confirmation) {
            const url = `https://evening-plateau-86759.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(dH => {
                    if (dH.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainigItems = allProducts.filter(producted => producted._id !== id)
                        setAllProducts(remainigItems);
                    }
                })
        }
    }

    return (
        <div>
            <h2 style={{
                color: "#0f0c2f"
            }}>Manage {allProducts?.length} Products</h2>
            <div className="row">
                {
                    allProducts.map(pdt => <div
                        key={pdt._id}
                        buy={pdt}
                        className="col-md-4 col-sm-12" >
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={pdt?.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{pdt?.name}</h5>
                                <p class="card-text">{pdt?.price}</p>
                                <button onClick={() => handleDeleteUser(pdt?._id)} className="custom-button">Delete {pdt?.name} </button>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;