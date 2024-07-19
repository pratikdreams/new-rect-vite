import React from 'react';
import './Nav.css';
import Image from "../assets/nav-and-cta/Group 46.png";
import Image1 from "../assets/nav-and-cta/Arrow 1.png";
import { Navigate } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={Image} className="mainlogo" alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Our Products
              </a>
              
              <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">MERN STACK</a>
                <a className="dropdown-item" href="#">Headless Wordpress</a>
                <a className="dropdown-item" href="#">Headless Strapi</a>
                <a className="dropdown-item" href="#">Node.js Templates</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Components</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          <button className="btn sbtn">Sign in <img src={Image1} className="arrow" alt="Arrow" /></button>
        </div>
      </nav>
      <hr className='mh' />

      <nav className="nav">
          <div>
            <img src={Image} className="mainlogo" alt="" />
          </div>
          <ul className="navul">
            <li><a href>Our Products <i className="fas fa-chevron-down" /></a></li>
            <li><a href>Components</a></li>
            <li><a href>Pricing</a></li>
            <li><a href>Blog</a></li>
            <li><a href>Contact Us</a></li>
          </ul>
          <button className="sbtn">Sign in <img src={Image1} className="arrow" alt="" /></button>
        </nav>
       
    </div>
  );
}



