import React from 'react'
import './Pricingpagecompo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                <h2 className='text-light'>DESIGNER</h2>
                <p className="price">49 <span>/Year</span></p>
              </div></span>
              <span><div className="pricing-column">
                <h2 className='text-light'>STARTUP</h2>
                <p className="price">89 <span>/Year</span></p>
              </div></span>
              <span><div className="pricing-column">
                <h2 className='text-light'>COMPANY</h2>
                <p className="price">199 <span>/Year</span></p>
              </div></span>
              <span><div className="pricing-column">
                <h2 className='text-light'>LIFETIME</h2>
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
              <span className="right"> <button className="c-btnn2">Coming Soon →</button></span>
              <span className="right"> <button className="c-btnn2">Coming Soon →</button></span>
              <span className="right"> <button className="c-btnn2">Coming Soon →</button></span>
              <span className="right"> <button className="c-btnn2">Coming Soon →</button></span>
            </div>
          </div>
        </div>
      </section>
      <section className="main-container-p">
        <div className="pricing-all-action" data-aos="zoom-in">
          <h2 className='text-light'>Not sure which template to buy?<br />Get all of them</h2>
          <div className="pricing-sec-child1">
            <div className="pricing-child2">No payment required</div>
            <div className="pricing-child2">Quick Support and Services</div>
          </div>
          <button className="cu-button">Contact Us →</button>
        </div>
        <div className="last-sec" data-aos="zoom-in">
          <h2 className='text-light fs-2'>Frequently Asked Questions</h2>
          <p className="faq-description">Check out the Best full stack solution and React, Next.js Ready-Made Templates. Every template we ensure super fast speed, scalable and secure</p>
          <div className="faq-grid accordion" id="accordionExample">
            <div className="four-i accordion-item ai-pricing">
              <h2 className="accordion-header">
                <button className="accordion-button faq-pricing-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pricingcollapseOne" aria-expanded="false" aria-controls="pricingcollapseOne">
                  Do you offer refunds if I am not satisfied with the products or membership?
                </button>
              </h2>
              <div id="pricingcollapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body ab-pricing">
                  Yes, we offer refunds within 7 days for all products and bundles, but unfortunately not for membership plans.
                </div> 
              </div>
            </div>
            <div className="four-i accordion-item ai-pricing">
              <h2 className="accordion-header">
                <button className="accordion-button faq-pricing-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pricingcollapseTwo" aria-expanded="false" aria-controls="pricingcollapseTwo">
                  Can I modify or customize the templates and components to fit my specific needs?
                </button>
              </h2>
              <div id="pricingcollapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body ab-pricing">
                  Yes, you can modify or customize the templates and components to fit your specific needs.
                </div>
              </div>
            </div>
            <div className="four-i accordion-item ai-pricing">
              <h2 className="accordion-header">
                <button className="accordion-button faq-pricing-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pricingcollapseThree" aria-expanded="false" aria-controls="pricingcollapseThree">
                can i modify or customize the templates and components to fit
                my specifuc needs?
                </button>
              </h2>
              <div id="pricingcollapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body ab-pricing">
                  Yes, you can modify or customize the templates and components to fit your specific needs.
                </div>
              </div>
            </div>
            <div className="four-i accordion-item ai-pricing">
              <h2 className="accordion-header">
                <button className="accordion-button faq-pricing-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pricingcollapseFour" aria-expanded="false" aria-controls="pricingcollapseFour">
                do you offer documentation to help me get started with using 
                these products?
                </button>
              </h2>
              <div id="pricingcollapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body ab-pricing">
                  Yes, you can modify or customize the templates and components to fit your specific needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
