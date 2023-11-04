import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserPending, getUserSuccess } from '../redux/Slices/userReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginFailed, loginPending, loginRefresh, loginSuccess } from '../redux/Slices/authSlice';
import AuthActions from '../redux/middleware/auth';

const Signin = () => {
    const { theme } = useSelector(state => state.theme)
    const { user, isLoading, error } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // const loginHandler = async () => {
    //     if (!email || !password) {
    //         toast.error('Email and Password are required');
    //         return;
    //     }
    //     // dispatch(loginPending());
    //     try {
    //         const apiResponse = await AuthActions.UserLogin({ email, password });
    //         if (apiResponse.status) {
    //             const { data, token } = apiResponse;
    //             const payload = {
    //                 user: data,
    //                 token: token,
    //             };
    //             console.log("payload", payload)
    //             localStorage.setItem("dummyusertoken", token)
    //             navigate('/jobcreatejob');
    //             // dispatch(loginSuccess(payload));
    //             // localStorage.setItem('loginUserDetails', JSON.stringify(payload));
    //             // toast.success('Login Successfully');
    //             // setTimeout(() => {
    //             //   navigate('/dashboard');
    //             // }, 2000)
    //         } else {
    //             const payload = {
    //                 message: 'Invalid User Email or Password',
    //             };
    //             dispatch(loginFailed(payload));
    //         }
    //     } catch (error) {
    //         console.log("worked")
    //         dispatch(loginFailed(error));
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email && password) {
            toast('Email is required');
            return;
        }
        if (email && !password) {
            toast('Password is required');
            return;
        }
        if (!email || !password) {
            toast('Email and Password are required');
            return;
        }

        // handle form submission logic here
        dispatch(loginPending());

        try {
            const apiResponse = await AuthActions.UserLogin({ email, password });


            console.log(apiResponse, "====>>>apiResponse")


            if (apiResponse.status) {
                const { data, token } = apiResponse;
                const payload = {
                    user: data,
                    token: token,
                };
                console.log("payload", payload)
                localStorage.setItem("dummyusertoken", token)
                // navigate('/jobcreatejob');
                dispatch(loginSuccess(payload));
                localStorage.setItem('loginUserDetails', JSON.stringify(payload));
                toast.success('Login Successfully');
                // setTimeout(() => {
                //   navigate('/dashboard');
                // }, 2000)
            } else {
                const payload = {
                    message: 'Invalid User Email or Password',
                };
                dispatch(loginFailed(payload));
            }
        } catch (error) {
            console.log("worked")
            // dispatch(loginFailed(error));
        }


    
    };

    useEffect(()=> {
        if(error) {
            toast(error);
            dispatch(loginRefresh)
        }
    }, [error])

    return (
        isLoading ? <h1>Loading...</h1> : <div style={{ backgroundColor: theme === "light" ? 'white' : 'black', color: theme === "light" ? 'black' : 'white' }}>
            <ToastContainer />
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
