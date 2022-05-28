import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoReactSmall from '../images/logo-react-small.png';
import Banner from "./Banner";
export default function Home(){
    const email = useSelector((state) => state.email)
    return(
        <Fragment>
            <nav>
                <Link className="nav--logo-text" to={'#'}>Challenge 5</Link>
                <Link className="nav--btnregis" to={'#'}>Hai, {email}</Link>
            </nav>
            <Banner/>
        </Fragment>
        
    )
}