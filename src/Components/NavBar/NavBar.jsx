import {BrowserRouter as Router,  Switch, Route , Link} from 'react-router-dom';
import React from 'react';
import './NavBar.css';


export default function NavBar() {
    return (
        <div className="navBarDiv">
            <Link className = "link" to="/">
              Home
            </Link>
            <Link className = "link" to="/Table">
              Table
            </Link>  
            <Link className = "link" to="/Form">
              Form
            </Link>  
        </div>
    )
}
