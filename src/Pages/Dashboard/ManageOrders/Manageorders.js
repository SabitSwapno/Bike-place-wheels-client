import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Manageorders = () => {
    const { user } = useAuth()
    const [allBuyings, setAllBuyings] = useState([]);
    useEffect(() => {
        const url = `https://evening-plateau-86759.herokuapp.com/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllBuyings(data))
    }, [])

    const handleDeleteUser = id => {
        const confirmation = window.confirm('Are you sure, you want to delete?');
        if (confirmation) {
            const url = `https://evening-plateau-86759.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(d => {
                    if (d.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainigItems = allBuyings.filter(books => books._id !== id)
                        setAllBuyings(remainigItems);
                    }
                })
        }
    }
    return (
        <div>
            <h2 style={{
                color: "#0f0c2f"
            }}>Manage {allBuyings?.length} Orders</h2>
            {
                allBuyings.map(buys => <div
                    key={buys._id}
                    buy={buys}
                >
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Serviceid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{buys?.name}</td>
                                <td>{buys?.email}</td>
                                <td>{buys?.address}, {buys?.city}</td>
                                <td>Pending</td>
                                <td>{buys?.productName}</td>
                                <button
                                    onClick={() => handleDeleteUser(buys?._id)}
                                    className="btn btn-danger">Cancel</button>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    );
};

export default Manageorders;