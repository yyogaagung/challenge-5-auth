import React from "react";
import FormRegister from "./FormRegister";
import Hero from "./Hero";

export default function Register(){
    return(
        <div className="register--wrap" >
            <Hero/>
            <FormRegister/>
        </div>
    )
}