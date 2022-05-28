import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {Outlet } from "react-router";

export default function Navbar(){
    return(
        
            <Fragment>
            <nav>
                <Link className="nav--logo-text" to={'/'}>Challenge 5</Link>
                <Link className="nav--btnregis" to={'/register'}>Register</Link>
            </nav>
            <Outlet></Outlet>
        </Fragment>
    )
}