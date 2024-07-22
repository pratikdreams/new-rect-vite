import React from 'react'
import './Pricingpagecompo.css'

export default function Pricingpagecompo() {
  return (
    <div>
    <section className="pricing-section">
      <div className="pricing-container">
        <h1 className="psh1">Our Pricing</h1>
        <p>Pricing plans for businesses at every stage of grown</p>
        <div className="fea-t">
          <div className="f-r">
            <span className="f-name" />
            <span><div className="pricing-column">
                <h2>DESIGNER</h2>
                <p className="price">49 <span>/Year</span></p>
              </div></span>
            <span><div className="pricing-column">
                <h2>STARTUP</h2>
                <p className="price">89 <span>/Year</span></p>
              </div></span>
            <span><div className="pricing-column">
                <h2>COMPANY</h2>
                <p className="price">199 <span>/Year</span></p>
              </div></span>
            <span><div className="pricing-column">
                <h2>LIFETIME</h2>
                <p className="price">299 <span>/Year</span></p>
              </div></span>
          </div>
          <div className="f-r">
            <span className="f-name">All Templates + Themes</span>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="f-r">
            <span className="f-name">All Figma Templates</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name">All Tailwind CSS Templates</span>
            <span className="cross">✕</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name">All Nextjs Templates</span>
            <span className="cross">✕</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name">All Headless CMS Theme</span>
            <span className="cross">✕</span>
            <span className="cross">✕</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name">Upcoming Templates</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name">License to use</span>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="f-r">
            <span className="f-name">Unlimited Projects</span>
            <span />
            <span />
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name">Free Updates</span>
            <span className="cross">✕</span>
            <span className="cross">✕</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name">Priority Support</span>
            <span className="cross">✕</span>
            <span className="cross">✕</span>
            <span className="right">✓</span>
            <span className="right">✓</span>
          </div>
          <div className="f-r">
            <span className="f-name" />
            <span className="cross"> <button className="c-btnn">Coming Soon →</button></span>
            <span className="cross"> <button className="c-btnn">Coming Soon →</button></span>
            <span className="right"> <button className="c-btnn2">Coming Soon →</button></span>
            <span className="right"> <button className="c-btnn2">Coming Soon →</button></span>
          </div>
        </div>
      </div>
    </section>
    {/*  */}
    <section className="main-container-p">
      <div className="pricing-all-action">
        <h2>Not sure which template to buy?<br />Get all of them</h2>
        <div className="pricing-sec-child1">
          <div className="pricing-child2">No payment required</div>
          <div className="pricing-child2">Quick Support and Services</div>
        </div>
        <button className="cu-button">CONTACT US →</button>
      </div>
      <div className="last-sec">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-description">Check out the Best full stack solution and React, Next.js Ready-Made Templates. Every templates we ensure super fast speed, scaleable and secure</p>
        <div className="faq-grid">
          <div className="four-i">
            <p className="for-p">Do you offer refunds if I am not satisfied with the products or membership?</p>
            <p>Yes, we offer refunds within 7 days for all products and bundles, but unfortunately not for membership plans.</p>
          </div>
          <div className="four-i">
            <p className="for-p">Can I Use templates and components for client project?</p>
            <p>Yes, you can use the templates and components for both client and personal projects. You can not sell any product directly or with any notification of digital downloadable items.</p>
          </div>
          <div className="four-i">
            <p className="for-p">Can I modify or customize the templates and components to fit my specific needs?</p>
          </div>
          <div className="four-i">
            <p className="for-p">Do you offer documentation to help me get started with using these products?</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}
