import React from 'react'
import './Cta.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../assets/nav-and-cta/Arrow 2.png"
import Image1 from "../assets/nav-and-cta/image 18.png"
import Image2 from "../assets/nav-and-cta/image 20.png"
import Image3 from "../assets/nav-and-cta/image 22.png"
import Image4 from "../assets/nav-and-cta/image 24.png"
import Image5 from "../assets/nav-and-cta/image 26.png"
import Image6 from "../assets/nav-and-cta/image 28.png"
import Image7 from "../assets/nav-and-cta/Group 50.png"

export default function Cta() {
  return (
    <div>
    <section className="cta ms-md-4 me-md-4" data-aos="fade-left">
      <div className="cc ">Here is our component solution <button className="bt"><img src={Image} className="ctaimgl" alt="" /></button></div>
      <h1 className='ps-2 pe-2' >Create Beautiful Website with Our Templates and UI Components</h1>
      <p className='ps-3 pe-3 '>Create a stunning website that stands out with our headless CMS themes, React, Next.js templates, and UI components. Get access and start building!</p>
      <a href="#" className="cta-button">Get All Access <img src={Image} className="ctaimg" alt="" /></a>
    </section>
    <section className="container scale-up-center ctacenter">
      <div className="box effect-form">
        <img src={Image1} alt="" />
        <p>Tailwind CSS</p>
      </div>
      <div className="box effect-form">
        <img src={Image2} alt="" />
        <p>Bootstrap</p>
      </div>
      <div className="box effect-form">
        <img src={Image3} alt="" />
        <p>React Bootstrap</p>
      </div>
      <div className="box effect-form">
        <img src={Image4} alt="" />
        <p>React</p>
      </div>
      <div className="box effect-form">
        <img src={Image5} alt="" />
        <p>Next.js</p>
      </div>
      <div className="box effect-form">
        <img src={Image6} alt="" />
        <p>TypeScript</p>
      </div>
    </section>
    <div className="one"><img src={Image7} className="oneimg" alt="" /></div>
  </div>

  )
}



