import React from 'react'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div style={{ marginTop: 300 }}>
    <h1>Welcome To My Login/Sign Up Testing Site</h1>
    <NavLink style={{"margin":50}} className="mdc-button mdc-button--outlined" to="/register">
      Sign Up
    </NavLink>
    <NavLink className="mdc-button mdc-button--outlined" to="/login">
      Login
    </NavLink>
  </div>
);
}

export default Home