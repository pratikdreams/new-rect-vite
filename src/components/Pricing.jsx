import React from 'react'
import './Pricing.css'
import Image1 from "../assets/section4/Arrow 6.png"

export default function Pricing() {
  return (
    <div>
       <section className="pricingsec4 pt-lg-3">
        <h1 className="pricingh1 text-light fs-1 mt-5">Pricing</h1>
        <p className="pricingp ps-4 pe-4 ps-md-5 pe-md-5"> Build your website with confidence, knowing that our flexible pricing plans are designing to meet your unique needs and budget</p>
        <div className="pc">
          <div className="card" data-aos="flip-left">
            <h2 className='text-light'>DESIGNER</h2>
            <div className="rs">$49 <span>/year</span></div>
            <p className="mainp">Good for a personal or client web/mobile app.</p>
            <hr className="phr" />
            <ul>
              <li className='text-light'>All Figma Templates</li>
              <li className="uli"><span className="uli-span">All HTML Templates</span></li>
              <li className="uli"><span className="uli-span">ALL Nextjs Templates</span></li>
              <li className="uli"><span className="uli-span">All Headless CMS Templates</span></li>
            </ul>
            <hr className="phr" />
            <button className="sub">Subscribe → </button> 
            {/* <img src={Image1} className="sub-img" alt="" /> */}
          </div>
          <div className="card" data-aos="flip-left">
            <h2 className='text-light'>STARTUP</h2>
            <div className="rs">$89 <span>/year</span></div>
            <p className="mainp">build your startup or client web/mobile app.</p>
            <hr className="phr" />
            <ul>
              <li className="lia">All Figma Templates</li>
              <li className="lia">All HTML Templates</li>
              <li className="lia">All Nextjs Templates</li>
              <li className="lia">All Headless CMS Templates</li>
            </ul>
            <hr className="phr" />
            <button className="sub">Subscribe → </button> 
            
          </div>
          <div className="card" data-aos="flip-left">
            <h2 className='text-light'>COMPANY</h2>
            <div className="rs">$199 <span>/year</span></div>
            <p className="mainp">Perfect for web/mobile apps or SaaS projects.</p>
            <hr className="phr" />
            <ul>
              <li className="lia">All Figma Templates</li>
              <li className="lia">All HTML Templates</li>
              <li className="lia">All Nextjs Templates</li>
              <li className="lia">All Headless CMS Templates</li>
            </ul>
            <hr className="phr" />
            <button className="sub">Subscribe → </button> 
          </div>
          <div className="card" data-aos="flip-left">
            <h2 className='text-light'>LIFETIME ACCESS</h2>
            <div className="rs">$299 <span>/forever</span></div>
            <p className="mainp">Join and acquire Lifetime Access to all our Present</p>
            <hr className="phr" />
            <ul>
              <li className="lia">All Figma Templates</li>
              <li className="lia">All HTML Templates</li>
              <li className="lia">All Nextjs Templates</li>
              <li className="lia">All Headless CMS Templates</li>
            </ul>
            <hr className="phr" />
            <button className="sub">Subscribe → </button> 
          </div>
        </div>
        <button className="seep"> See Pricing Details →   </button> 
        {/* <img src={Image1} className="seep-img" alt="" /> */}
      </section>
    </div>
  )
}
