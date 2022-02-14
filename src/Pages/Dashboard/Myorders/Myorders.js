import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Myorders = () => {
    const { user } = useAuth()
    const [buyings, setBuyings] = useState([]);
    useEffect(() => {
        const url = `https://evening-plateau-86759.herokuapp.com/orders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBuyings(data))
    }, [])

    const handleDeleteUser = id => {
        const confirmation = window.confirm('Are you sure, you want to delete?');
        if (confirmation) {
            const url = `https://evening-plateau-86759.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(dt => {
                    if (dt.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainigItems = buyings.filter(book => book._id !== id)
                        setBuyings(remainigItems);
                    }
                })
        }
    }

    return (
        <div>
            <h2 style={{
                color: "#0f0c2f"
            }}>My {buyings?.length} Orders</h2>
            {
                buyings.map(buy => <div
                    key={buy._id}
                    buy={buy}
                >
                    <Table striped bordered hover size="sm"
                        width="100%">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>ServiceName</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{buy?.name}</td>
                                <td>{buy?.email}</td>
                                <td>{buy?.address}, {buy?.city}</td>
                                <td>Pending</td>
                                <td>{buy?.productName}</td>
                                <button
                                    onClick={() => handleDeleteUser(buy?._id)}
                                    className="btn btn-danger">Cancel</button>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    );
};

export default Myorders;