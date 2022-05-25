import React, { Fragment } from "react";
import heroImg from '../images/hero-img.jpg'
import cars from '../images/cars.png'

export default function Hero(){
    return(
        <Fragment>
            <div className="hero--wrap">
                
                    <img
                        src={cars}
                        alt="car banner here"
                    />
                
            </div>
        </Fragment>
        
    )
}