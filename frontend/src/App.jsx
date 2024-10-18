import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';
import './App.css';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <div className="App">
            {!token ? (
                <>
                    <Register />
                    <Login setToken={setToken} />
                </>
            ) : (
                <>
                    <h2>Welcome! You are logged in.</h2>
                    <Protected />
                    <button onClick={() => {
                        localStorage.removeItem('token');
                        setToken(null);
                    }}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
};

export default App;
