import React, { useEffect, useState } from 'react';
import './Signin.css';
import Image1 from '../assets/login/image 88.png';
import Image2 from '../assets/login/image 87.png';
import Image3 from '../assets/login/Group4.png';
import EyeOpenIcon from '../assets/login/eye-solid.svg';
import EyeCloseIcon from '../assets/login/eye-slash-solid.svg'; // Your eye-close icon path
import { Input, initMDB } from 'mdb-ui-kit';
import { Link } from "react-router-dom";

export default function Ssignin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    initMDB({ Input });
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className='signin-mmj'>
      <div className="signin-container ms-2 me-2">
      <div className='s-lox'>
      <img src={Image3} alt="" /></div>
        <h1 className='wel-signin pt-5'>Create Your Account</h1>
        {/* <h2 className='well-h2'>sign up to JS template</h2> */}
        <form>
          <div className="form-outline">
            <input type="text" id="name" className="form-control" placeholder=" " required />
            <label className="form-label" htmlFor="name">Name*</label>
          </div>
          {/* <div className="form-outline">
            <input type="text" id="surname" className="form-control" placeholder=" " required />
            <label className="form-label" htmlFor="surname">Surname*</label>
          </div> */}
          <div className="form-outline">
            <input type="email" id="email" className="form-control" placeholder=" " required />
            <label className="form-label" htmlFor="email">Email address*</label>
          </div>
          <div className="form-outline">
            <input type="text" id="mobile" className="form-control" placeholder=" " required />
            <label className="form-label" htmlFor="mobile">Mobile Number*</label>
          </div>
          <div className="form-outline password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              className="form-control" 
              placeholder=" " 
              required 
            />
            <label className="form-label" htmlFor="password">Create Password*</label>
            <button 
              type="button" 
              className="password-toggle-btn" 
              onClick={togglePasswordVisibility}
            >
              <img src={showPassword ? EyeCloseIcon : EyeOpenIcon} alt="Toggle visibility" />
            </button>
          </div>
          <div className="form-outline password-container">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              id="confirm-password" 
              className="form-control" 
              placeholder=" " 
              required 
            />
            <label className="form-label" htmlFor="confirm-password">Confirm Password*</label>
            <button 
              type="button" 
              className="password-toggle-btn" 
              onClick={toggleConfirmPasswordVisibility}
            >
              <img src={showConfirmPassword ? EyeCloseIcon : EyeOpenIcon} alt="Toggle visibility" />
            </button>
          </div>
          <button type="submit" className="continue-btn">Sign Up</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/l">log In</Link>
        </div>
        <div className="or">OR</div>
        <div className="social-signin">
          <div className="social-btn">
            <img src={Image1} alt="Google" />
            Sign up with Google
          </div>
          <div className="social-btn">
            <img src={Image2} alt="GitHub" />
            Sign up with GitHub
          </div>
        </div>
      </div>
    </section>
  );
}
