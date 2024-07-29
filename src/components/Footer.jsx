import React from 'react'
import './Footer.css'
import Image1 from "../assets/footer/Group 85.png"
import Image2 from "../assets/footer/image 63.png"
import Image3 from "../assets/footer/image 61.png"
import Image4 from "../assets/footer/image 62.png"





export default function Footer() {
  return (
    <div>
     <section className=' pt-2 ps-lg-5 pe-lg-5 sdfgh'>
     <footer className='footersec ps-4 pe-4 ps-md-5 pe-md-5 '>
        <div className="foot-b ">
          <div className="logo">
            <img src={Image1} className="f-img" alt="" />
          </div>
          <p className='pe-lg-5'>Top of Javascript Templates, UI Components and Full Stack Solution our entire catalogue with a membership.</p>
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
        <div className='ls-cl'>
        <div className="hire">
          <h3>Building Innovative Web Solutions from Frontend to Backend</h3>
          <button className='fr-btn'>Hire Us →</button>
        </div>
       <div className='d-flex'> <img src={Image4} className='f-img4' alt="" /> <p> Web development made easy with our full stack expertise.</p></div>
        </div>
        
        <hr className="f-hr" />
        <div className="copyright">
          <div className='f-cp-div'> <p>© 2023 JS Template, All Right Reserved </p> </div>
          <div className="ssl">
           <div className=' pt-lg-3 ssl3'> <div><img src={Image2} className="ssl-img12" alt="" /></div><div>SSL Secure Payment &nbsp; &nbsp; &nbsp;</div> </div>
           <div> <img src={Image3} className="ssl-img2" alt="" /></div>  </div>
        </div>
      </footer>
     </section>
    
    </div>
  )
}
