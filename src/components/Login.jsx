import React from 'react'
import './Login.css'
import Image1 from "../assets/login/image 88.png"
import Image2 from "../assets/login/image 87.png"

export default function Login() {
  return (
   <section className='login-mmj'>
     <div className="login-container ms-2 me-2">
    <h1>welcome</h1>
    <h2>log in to JS template</h2>
    <form>
      <input type="email" placeholder="Email address*" required />
      <input type="password" placeholder="Password*" required />
      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" className="continue-btn">Continue</button>
    </form>
    <div className="signup-link">
      Don't have an account? <a href="#">sign up</a>
    </div>
    <div className="or">OR</div>
    <div className="social-login">
      <div className="social-btn">
        <img src={Image1} alt="" />
        Continue with Google
      </div>
      <div className="social-btn">
        <img src={Image2} alt="" />
        Continue with GitHub
      </div>
    </div>
  </div>
   </section>
  )
}
