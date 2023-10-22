import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserPending, getUserSuccess } from '../redux/Slices/userReducer';

const Signin = () => {
    const { theme } = useSelector(state => state.theme)
    const { user, loading } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission logic here
        dispatch(getUserPending())
        setTimeout(() => {
            if (email && password) {
                const payload = {
                    data: {
                        name: "John Doe",
                        email: "inno@mail.com",
                        phoneNumber: 12345555
                    },
                    token: "1234567890"
                }
                dispatch(getUserSuccess(payload))
                alert("You have successfully signed in!")
            }
        }, 2000)
    };

    return (
        loading ? <h1>Loading...</h1> : <div style={{ backgroundColor: theme === "light" ? 'white' : 'black', color: theme === "light" ? 'black' : 'white' }}>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li>{user?.name} logged in</li>
            </ul>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Signin;
