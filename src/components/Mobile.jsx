import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Mobile.css'


function MobileApp() {
  const [showAccordion, setShowAccordion] = useState(false);

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div>
      <div className="dropdown" >
        <button className=" text-light dropdown-toggle" type="button" onClick={toggleAccordion}>
          Our Product
        </button>
      </div>

      {showAccordion && (
        <div className="containerr" id="accordionContainer">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item mod-ai">
              <h2 className="accordion-header">
                <button className="accordion-button mod-acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#f1" aria-expanded="false" aria-controls="f1">
                  Mern stack
                </button>
              </h2>
              <div id="f1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body mod-ab">
                  <div className='text-secondary'>Metajobs-MERN stack job board theme</div>
                  <div className='text-secondary pt-3'>Metajobs-MERN stack classified ads theme</div>
                </div>
              </div>
            </div>
            <div className="accordion-item mod-ai">
              <h2 className="accordion-header">
                <button className="accordion-button mod-acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#f2" aria-expanded="false" aria-controls="f2">
                  Headless Wordpress
                </button>
              </h2>
              <div id="f2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body mod-ab">
                  <div className='text-secondary'>Headless woocommerce theme</div>
                  <div className='text-secondary pt-3'>Headless Wordpress Blog</div>
                </div>
              </div>
            </div>
            <div className="accordion-item mod-ai">
              <h2 className="accordion-header">
                <button className="accordion-button mod-acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#f3" aria-expanded="false" aria-controls="f3">
                  Headless Strapi
                </button>
              </h2>
              <div id="f3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body mod-ab">
                  <div className='text-secondary'>Metaads- classified ads nextjs headless
                  theme </div>
                  <div className='text-secondary pt-3'>Prolist- real estate &#038; property listing
                  web application</div>
                </div>
              </div>
            </div>
            <div className="accordion-item mod-ai">
              <h2 className="accordion-header">
                <button className="accordion-button mod-acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#f4" aria-expanded="false" aria-controls="f4">
                  Next.js Templates
                </button>
              </h2>
              <div id="f4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body mod-ab">
                  <div className='text-secondary'>Metablog- nextjs blog template <br/> <p className='acpp'>Next.js, Tailwind CSS, Typescript, DaisyUI</p> </div>
                  <div className='text-secondary pt-3'>Jobboard- nextjs job board template </div>
                  <div className='text-secondary pt-3'>Portfo- nextjs portfolio template </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileApp;
