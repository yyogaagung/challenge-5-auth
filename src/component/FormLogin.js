import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { getEmail } from "../action";
import mockup from '../mockupData/mockup'

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate =  useNavigate()
    const emailRedux = useSelector((state) => state.email)

    const handleSubmit = (e) => {
        e.preventDefault();
        const  respone = mockup(email, password)
        dispatch(getEmail(respone.email));
        if(emailRedux === 'admin'){
            navigate('/dashboard')
        }else{
            navigate('/home')
        }
       
        
    }

    return(
        <div className="wrap--fromregis">
            <form onSubmit={handleSubmit}>
                <h4>Log in, please</h4>
                <div className="input--wrap">
                    <label>
                    <p>Email</p> 
                        <input 
                        type={'text'} 
                        placeholder='Masukan Email'
                        onChange={(e)=>{
                            setEmail(e.target.value);
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
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}>
                        </input>
                    </label>
                </div>
                <button className="submit--regis" type="submit">Log in</button>      
                <button className="submit--login--google" type="submit"> <i className="fa fa-google"></i> Log in with Google</button>            
            </form>
        </div>
    )
}