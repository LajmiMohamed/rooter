import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
const Login = () => {

    return (
        <div>
        <p>You must log in to view the page at /admin</p>
        <button><Link to="/admin">Log in</Link></button>
        </div>
    
    )
}

export default Login
