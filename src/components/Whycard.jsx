import React from 'react'
import './Whycard.css'

export default function Whycard() {
  return (
    <div>
        <section className='main-why-sec ms-lg-5 me-lg-5 mt-lg-5'>
        <div className="sec7-cont ms-4 me-4 ms-md-5 me-md-5 ms-lg-5 me-lg-5" >
        {/* data-aos="zoom-in" */}
          <section className="main-sec-7">
            <h2 className='text-light'>Why are you waiting ?</h2>
            <p className='ps-md-5 pe-md-5'>The printing and typesetting is simply dummy text of the printing and typesetting industry dummy text</p>
            <form>
              <input type="email" className='wcemail' placeholder="Enter your email" />
              <button type="submit" className='whybutton'>Subscribe Now</button>
            </form>
          </section>
        </div>
        </section>
    </div>
  )
}
