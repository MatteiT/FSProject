// create a register page using the AuthSlice.jsx as a guide 

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/AuthSlice";

const Register = () => {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(email, password))
        .then(() => {
            enqueueSnackbar('Register successful', { variant: 'success' });
            history.push('/register');
        })
        .catch((err) => {
            enqueueSnackbar(err.message, { variant: 'error' });
        });
    };
    
    return (
        <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </form>
        </div>
    );
    }

export default Register;

