import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FormRegister(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let data;
    
    function responeRegister(email, password) {
        return(
             data = {
                email,
                password
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const  respone = responeRegister(email, password)
        const storage = window.localStorage;
        storage.setItem('email', respone.email )
    }

    return(
        <div className="wrap--fromregis">
            <form onSubmit={handleSubmit}>
                <h4>Create new Account</h4>
                <div className="input--wrap">
                    <label>
                    <p>Email</p> 
                        <input 
                        type={'text'} 
                        placeholder='Masukan Email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}>
                        </input>
                    </label>
                </div>
                <div className="input--wrap">
                    <label>
                    <p>Password</p>
                        <input
                        type={'password'}
                        placeholder='Masukan Password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}>
                        </input>
                    </label>
                </div>
                <input type="submit" value="Sign Up" className="submit--regis"/>
                <p className="to--login">Already have an account? <Link to={'/login'}>Login</Link></p>
            </form>
        </div>
        
    )
}