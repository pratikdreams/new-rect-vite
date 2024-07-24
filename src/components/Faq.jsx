import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Faq.css';

export default function Faq() {
  return (
    <div>
      <section className="sec6">
        <div className="sec6-div" data-aos="flip-left" >
       
          <h2>Frequently Asked Questions</h2>
          <p className="sec6-p">
            Check out the best full stack solution and React, Next.js Ready-Made Templates. Every template we ensure is super fast, scalable, and secure.
          </p>
          <div className="sec6-main">
            <p className="p6">Please don't hesitate to message us anytime.</p>
            <button className="get-button">Get Ticket →</button>
          </div>
        </div>
        <div className="sec6-div2" data-aos="flip-right" >
     
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  Do you offer refunds if I am not satisfied with the products or membership?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  Yes, we offer refunds within 7 days for all products and bundles, but unfortunately not for membership plans.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Can I modify or customize the templates and components to fit my specific needs?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  Yes, you can modify or customize the templates and components to fit your specific needs.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Can I use templates and components for client projects?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  Yes, you can use the templates and components for client projects.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  Do you offer documentation to help me get started with using these products?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body">
                  Yes, we offer detailed documentation to help you get started with using our products.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
