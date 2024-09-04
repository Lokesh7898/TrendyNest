import React, { useState } from 'react'
import './LoginPage.css'
import { assets } from '../../Assets/assets';

const LoginPage = ({setShowLogin}) => {

        const [currrState, setCurrState] = useState("Login");


  return (
    <div className='login-popup' id='loginPage'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currrState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false) } alt="" />
        </div>
        <div className="login-popup-inputs">
            {currrState==="Login"?<></>:
            <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currrState==="Sign Up"?"create account":"Login"}</button>
        <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currrState==="Login"?
        <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>click here</span></p> : 
        <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPage
