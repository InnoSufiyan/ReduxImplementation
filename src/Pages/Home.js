import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/Slices/themeReducer';
import { Link } from 'react-router-dom';

const Home = () => {
    const { theme } = useSelector(state => state.theme)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch();

    const themeHandler = () => {
        dispatch(toggleTheme())
    }

    return (
        <div style={{ backgroundColor: theme === "light" ? 'white' : 'black', color: theme === "light" ? 'black' : 'white' }}>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="/privateJobPost">Job Posting</Link></li>
                <li><Link to="/jobAd">Job Ad</Link></li>
                <li><Link to="/jobsearch">Get Jobs</Link></li>
                <li>{user?.name} logged in</li>
            </ul>
            <h1>Welcome to my website!</h1>
            <p>Feel free to browse around and learn more about me.</p>
            <button onClick={themeHandler}>
                Light Mode
            </button>
        </div>
    );
};

export default Home;
