import React from 'react'
import './Whychooseus.css'
import Image1 from "../assets/section5/Ellipse 4.png"
import Image2 from "../assets/section5/Ellipse 5.png"
import Image3 from "../assets/section5/Ellipse 4 (1).png"
import Image4 from "../assets/section5/Ellipse 5 (1).png"
import Image5 from "../assets/section5/Ellipse 4 (2).png"
import Image6 from "../assets/section5/Ellipse 5 (2).png"


export default function Whychooseus() {
  return (
    <div>
      
      
      <section className='ms-lg-5 me-lg-5'>
      <section className="section5  ms-4 me-4 ms-md-5 me-md-5 ms-lg-5 me-lg-5 ">
      
      <h2 className="section5-h2 ">Why Choose Us?</h2>
      <p className="section5-p">Our range of services is designed to help you to create beautiful and intuitive web app</p>
      <div className="section5-div">
        <div className="fea1"  data-aos="zoom-in">
          <div className="sec5-img"><img src={Image1} alt="" /></div>
          <h3 className="section5-h3">Dedicated Teams</h3>
          <p className="section5-p">We are committed to delivering top-quality products and services that meet your expectations and drive your success.</p>
        </div>
        <div className="fea2" data-aos="zoom-in">
          <div className="sec5-img"><img src={Image2} alt="" /></div>
          <h3 className="section5-h3 sec5h3">Highly Rated Support</h3>
          <p className="section5-p">Enjoy expert support from our team of professionals who are available to assist you throughout your journey.</p>
        </div>
        <div className="fea1" data-aos="zoom-in">
          <div className="sec5-img"><img src={Image3} alt="" /></div>
          <h3 className="section5-h3">Developer Friendly</h3>
          <p className="section5-p">Our tools and services are developer-friendly, making it easy to build and customize your website or application.</p>
        </div>
        <div className="fea2" data-aos="zoom-in">
          <div className="sec5-img"><img src={Image4} alt="" /></div>
          <h3 className="section5-h3 cus">Custom Services</h3>
          <p className="section5-p">We offer custom services tailored to your unique needs, ensuring that your project is a success from start to finish.</p>
        </div>
        <div className="fea1" data-aos="zoom-in">
          <div className="sec5-img"><img src={Image5} alt="" /></div>
          <h3 className="section5-h3">Well Documented</h3>
          <p className="section5-p">Our products and services are well-documented to make it easy to get started and stay on track with your project.</p>
        </div>
        <div className="fea2" data-aos="zoom-in">
          <div className="sec5-img"><img src={Image6} alt="" /></div>
          <h3 className="section5-h3 mbc ">Money Back Guarantee</h3>
          <p className="section5-p">We stand behind our products with a money back guarantee to ensure your complete satisfaction.</p>
        </div>
      </div>
    </section>
      </section>
      
      
    </div>
  )
}
