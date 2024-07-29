import React, { useEffect, useState } from 'react';
import './Login.css';
import Image1 from '../assets/login/image 88.png';
import Image2 from '../assets/login/image 87.png';
import Image3 from '../assets/login/Group4.png';
import EyeOpenIcon from '../assets/login/eye-solid.svg'; // Your eye-open icon path
import EyeCloseIcon from '../assets/login/eye-slash-solid.svg';// Your eye-close icon path
import { Input, initMDB } from 'mdb-ui-kit';
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    initMDB({ Input });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className='login-mmj'>
      <div className="login-container ms-2 me-2">
        <div className='l-lox'>
        <img src={Image3} alt="" /></div>
        <h1 className='wel-log pt-5'>Welcome Back</h1>
        {/* <h2 className='wel-h2'>log in to JS template</h2> */}
        
        <form>
          <div className="form-outline">
            <input type="email" id="form12" className="form-control" placeholder=" " required />
            <label className="form-label" htmlFor="form12">Email address*</label>
          </div>
          <div className="form-outline password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              className="form-control log-pas" 
              placeholder=" " 
              required 
            />
            <label className="form-label" htmlFor="password">Password*</label>
            <button 
              type="button" 
              className="password-toggle-btn" 
              onClick={togglePasswordVisibility}
            >
              <img src={showPassword ? EyeCloseIcon : EyeOpenIcon} alt="Toggle visibility" />
            </button>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="continue-btn">Continue</button>
        </form>
        <div className="signup-link">
          Don't have an account? <Link to="/signin">Sign Up</Link>
        </div>
        <div className="or">OR</div>
        <div className="social-login">
          <div className="social-btn">
            <img src={Image1} alt="Google" />
            Continue with Google
          </div>
          <div className="social-btn">
            <img src={Image2} alt="GitHub" />
            Continue with GitHub
          </div>
        </div>
      </div>
    </section>
  );
}
