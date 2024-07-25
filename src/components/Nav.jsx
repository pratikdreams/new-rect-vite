import React from "react";
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../assets/nav-and-cta/Group 46.png";
import Image1 from "../assets/nav-and-cta/Arrow 1.png";
import TogglerImage from "../assets/nav-and-cta/Group 84.png"; // Import your custom image
import BtnApp from "./btn";
import { Link, Navigate, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      {/* mobile */}
      <section className="mobile-section">
        <nav className="navbar navbar-light mobile">
          <NavLink to="/" ><a className="navbar-brand" href="#">
            <img src={Image} className="mainlogo" alt="Logo" />
          </a></NavLink>
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
              <NavLink to="/l" ><button className="butdrop">Sign In or Registration  </button> </NavLink>
              <li className="nav-item">
                <NavLink to="/Home" >  <a className="nav-link" href="#">
                  Home
                </a> </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
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
                  className="dropdown-menu bg-dark"
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
              </li>

              <li className="nav-item">
                <NavLink to="/c" > <a className="nav-link" href="#">
                  Components
                </a></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/e" >  <a className="nav-link" href="#">
                  Pricing
                </a> </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Blogpage" >  <a className="nav-link" href="#">
                  Blog
                </a></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contactpage" >  <a className="nav-link" href="#">
                  Contact us
                </a></NavLink>
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
            <NavLink to="/" > <img src={Image} className="mainlogo" alt="" /></NavLink>
          </div>
          <ul className="navul">
            <li>
              <a href>
                <NavLink to="/Home">Home</NavLink>
              </a>
            </li>
            <li>
              <a href>
                <BtnApp />
              </a>
            </li>
            <li>
              <a href>
                <NavLink to="/c">Components</NavLink>
              </a>
            </li>
            <li>
              <NavLink to="/e" ><a href>Pricing</a> </NavLink>
            </li>
            <li>
              <NavLink to="/Blogpage" ><a href>Blog</a></NavLink>
            </li>
            <li>
              <a href> <NavLink to="/Contactpage">Contact Us</NavLink> </a>
            </li>
          </ul>
          <NavLink to="/l" ><button className="sbtn">
            Sign in <img src={Image1} className="arrow" alt="" />
          </button> </NavLink>
        </nav>
      </section>
    </div>
  );
}
