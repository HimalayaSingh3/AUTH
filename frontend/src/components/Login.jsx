import React, { useState } from 'react';
import axios from 'axios';
import "./Form.css"

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            alert('Login successful');
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
