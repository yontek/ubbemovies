import "./login.scss"
import logo from "../register/ubbe.png"
import { useRef, useState } from "react"



export default function Login() {

   
  return (
    <div className="login">
<div className="top">
    <div className="wrapper">
    <img className="logo"  src={logo} 
    alt=""
     />
     
     </div>
</div>
<div className="container">

    <form action="">
        <h1>Sign In</h1>
        <input type="email" placeholder="Email"/>
        <input type="Password" placeholder="password" />
        <button className="loginButton">Sign In</button>
        <span>New to Simba Movies? <b>Sign Up Now</b>
          
        </span>
        <span>Register For Very Cheap premium ad free Cinema</span>
    </form>
    
    
</div>
    </div>
  )
}
