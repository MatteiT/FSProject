// create a login page using the AuthSlice.jsx as a guide 

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../features/AuthSlice";

const Login = () => {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(email, password))
        .then(() => {
            enqueueSnackbar('Login successful', { variant: 'success' });
            history.push('/login');
        })
        .catch((err) => {
            enqueueSnackbar(err.message, { variant: 'error' });
        });
    };
    
    return (
        <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
        </div>
    );
    }

export default Login;

