import React from 'react'
import './Footer.css'
import Image1 from "../assets/footer/Group 85.png"
import Image2 from "../assets/footer/image 63.png"
import Image3 from "../assets/footer/image 61.png"


export default function Footer() {
  return (
    <div>
       <footer>
        <div className="foot-b">
          <div className="logo">
            <img src={Image1} className="f-img" alt="" />
          </div>
          <p>Top of Javascript Templates, UI Components and Full Stack Solution.</p>
          <div className="social-icons">
            <i className="i-footer fa-brands fa-github" />
            <i className="i-footer fa-brands fa-dribbble" />
            <i className="i-footer fa-brands fa-behance" />
            <i className="i-footer fa-brands fa-facebook-f" />
            <i className="i-footer fa-brands fa-twitter" />
            <i className="i-footer fa-brands fa-linkedin" />
          </div>
        </div>
        <hr className="f-hr" />
        <div className="footer-l">
          <div className="menu">
            <h3>Menu</h3>
            <ul>
              <li>Home</li>
              <li>All Templates</li>
              <li>Pricing</li>
              <li>Docs</li>
              <li>Our Blog</li>
            </ul>
          </div>
          <div className="cate">
            <h3>Category</h3>
            <ul>
              <li>MERN Stack</li>
              <li>Tailwind CSS Template</li>
              <li>Next.js Templates</li>
              <li>Figma Templates</li>
            </ul>
          </div>
          <div className="info">
            <h3>Info</h3>
            <ul>
              <li>Get All-Access</li>
              <li>Contact Us</li>
              <li>Refund Request</li>
              <li>Terms &amp; License</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <hr className="f-hr" />
        <div className="hire">
          <h3>Building Innovative Web Solutions from Frontend to Backend</h3>
          <button>Hire Us →</button>
          <p>Web development made easy with our full stack expertise.</p>
        </div>
        <hr className="f-hr" />
        <div className="copyright">
          <div> <p>© 2023 JS Template, All Right Reserved</p> </div>
          <div className="ssl">
            <img src={Image2} className="ssl-img1" alt="" />SSL Secure Payment</div>
          <img src={Image3} className="ssl-img2" alt="" /> 
        </div>
      </footer>
    
    </div>
  )
}
