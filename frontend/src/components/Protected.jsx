import React, { useState } from 'react';
import axios from 'axios';

const Protected = () => {
    const [message, setMessage] = useState('');

    const accessProtectedRoute = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/protected', {
                headers: { Authorization: token },
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Access denied');
        }
    };

    return (
        <div className='protected'>
            <h2>Protected Route</h2>
            <button onClick={accessProtectedRoute}>Access Protected Route</button>
            <p>{message}</p>
        </div>
    );
};

export default Protected;
