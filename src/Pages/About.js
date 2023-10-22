import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const About = () => {
    const { theme } = useSelector(state => state.theme)
    const { user } = useSelector(state => state.user)
    return (
        <div style={{ backgroundColor: theme === "light" ? 'white' : 'black', color: theme === "light" ? 'black' : 'white' }}>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/signin">Signin</Link></li>
                <li>{user?.name} logged in</li>
            </ul>
            <h1>About Us</h1>
            <p>We are a company that specializes in creating amazing web applications.</p>
        </div>
    );
};

export default About;
