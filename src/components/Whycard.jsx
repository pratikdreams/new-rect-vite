import React from 'react'
import './Whycard.css'

export default function Whycard() {
  return (
    <div>
        <section className='main-why-sec'>
        <div className="sec7-cont" data-aos="zoom-in">
          <section className="main-sec-7">
            <h2 className='text-light'>Why are you waiting ?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Dummy Text</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className='whybutton'>Subscribe Now</button>
            </form>
          </section>
        </div>
        </section>
    </div>
  )
}
