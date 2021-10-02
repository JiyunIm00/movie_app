import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

// clicking href refreshes the whole page, killing react
// so import link instead of using <a href>
function Navigation(){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;