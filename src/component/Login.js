import React from "react";
import FormLogin from "./FormLogin";
import Hero from "./Hero";

export default function Login(){
    return(
        <div className="register--wrap" >
            <Hero/>
            <FormLogin/>
        </div>
    )
}