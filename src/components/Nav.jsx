import React from "react";
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Image from "../assets/nav-and-cta/Group 46.png";
import TogglerImage from "../assets/nav-and-cta/Group 84.png"; // Import your custom image
import BtnApp from "./btn";
import MobileApp from "./Mobile";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      {/* mobile */}
      <section className="mobile-section">
        <nav className="navbar navbar-light mobile">
          <NavLink to="/" className="navbar-brand">
            <img src={Image} className="mainlogo" alt="Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto m-2 ">
              <NavLink to="/l">
                <button className="butdrop">Sign In or Registration</button>
              </NavLink>
              <li className="nav-item">
                <NavLink to="/Home" className="nav-link">
                  Home
                </NavLink>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Products
                </a>

                <div
                  className="dropdown-menu dmc"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    MERN STACK
                  </a>
                  <a className="dropdown-item" href="#">
                    Headless Wordpress
                  </a>
                  <a className="dropdown-item" href="#">
                    Headless Strapi
                  </a>
                  <a className="dropdown-item" href="#">
                    Node.js Templates
                  </a>
    
                </div>
                
              </li> */}
               <li className="nav-item" >
                <MobileApp/>
              </li>

              <li className="nav-item">
                <NavLink to="/c" className="nav-link">
                  Components
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/e" className="nav-link">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Blogpage" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contactpage" className="nav-link">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <hr className="mh" />
      {/* desktop */}
      <section className="desktop-section">
        <nav className="nav desk">
          <div>
            <NavLink to="/">
              <img src={Image} className="mainlogo" alt="Logo" />
            </NavLink>
          </div>
          <ul className="navul">
            <li>
              <NavLink to="/Home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <BtnApp />
            </li>
            <li>
              <NavLink to="/c" className="nav-link">
                Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/e" className="nav-link">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blogpage" className="nav-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contactpage" className="nav-link">
                Contact Us
              </NavLink>
            </li>
            
          </ul>
          <NavLink to="/l">
            <button className="sbtn">
              Sign in →
            </button>
          </NavLink>
        </nav>
      </section>
    </div>
  );
}