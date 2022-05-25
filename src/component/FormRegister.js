import React from "react";
import { Link } from "react-router-dom";

export default function FormRegister(){
    return(
        <div className="wrap--fromregis">
            <form>
                <h4>Create new Account</h4>
                <div className="input--wrap">
                    <label>
                    <p>Email</p> 
                        <input 
                        type={'email'} 
                        placeholder='Masukan Email'>
                        </input>
                    </label>
                </div>
                <div className="input--wrap">
                    <label>
                    <p>Password</p>
                        <input
                        type={'password'}
                        placeholder='Masukan Password'>
                        </input>
                    </label>
                </div>
                <input type="submit" value="Sign Up" className="submit--regis"/>
                <p className="to--login">Already have an account? <Link to={'/login'}>Login</Link></p>
            </form>
        </div>
        
    )
}