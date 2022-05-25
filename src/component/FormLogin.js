import React from "react";

export default function FormLogin() {
    return(
        <div className="wrap--fromregis">
            <form>
                <h4>Log in, please</h4>
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
                <input type="submit" value="Log in" className="submit--regis"/>                
                <input type="submit" value=" Log in with Google" className="submit--login--google"/>            
            </form>
        </div>
    )
}