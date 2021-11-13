import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successs, setSeccesss] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://evening-plateau-86759.herokuapp.com/users', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSeccesss(true);
            })



        e.preventDefault()
    }

    return (
        <div className="bookingBG">
            <h3>Make An Admin</h3>
            <br />
            <form onSubmit={handleAdminSubmit}>
                <input className="custom-field-style"
                    type="email"
                    onBlur={handleOnBlur}
                    placeholder="Email" />
                <input className="custom-button" type="submit" />
                {
                    successs && <div class="alert alert-success" role="alert">
                        Made Admin successfully.
                    </div>
                }
            </form>
        </div>
    );
};

export default MakeAdmin;