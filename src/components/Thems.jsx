import React from 'react'
import './Thems.css'
import Image1 from "../assets/section3/image 16.png"
import Image2 from "../assets/section3/Rectangle 69 (4).png"
import Image3 from "../assets/section3/Rectangle 69 (1).png"
import Image4 from "../assets/section3/Rectangle 69 (2).png"
import Image5 from "../assets/section3/Rectangle 69 (3).png"
import Image7 from "../assets/section3/Arrow 3.png"
export default function Thems() {
  return (
    <div>
       <section>
        
        <h2 className="section3-child1">Templates &amp; Headless Themes</h2>
        <p className="section3-child2">Build your dream website with our full-stack solutions and React/Next js templates with super-fast speed,scalability, and security, your website is sure to stand out.</p>
        <div className="section3-child3">
          <div className="section3-child9">
            <div className="section3-child4 ">
              <img className="section3-child5" src={Image1} alt="" />
              <a className="section3-child6" href="#">Headless CMS</a>
              <h3 className="section3-child7">MetaAds- Classified Ads &amp; Listing Web Application </h3>
              <p className="section3-child7p">Teck Stack-Next.js, Typescript, Tailiwind CSS, DaisyUI and WordPress as Backend</p>
            </div>
          </div>
          <div>
            <div className="section3-child8">
              <img className="section3-child5" src={Image2} alt="" />
              <a className="section3-child6" href="#">Headless CMS</a>
              <h3 className="section3-child7">MetaAds- Classified Ads &amp; Listing Web Application </h3>
              <p className="section3-child7p">Teck Stack-Next.js, Typescript, Tailiwind CSS, DaisyUI and WordPress as Backend</p>
            </div>
          </div>
          <div className="section3-child9">
            <div className="section3-child4">
              <img className="section3-child5" src={Image3} alt="" />
              <a className="section3-child6" href="#">Headless CMS</a>
              <h3 className="section3-child7">MetaAds- Classified Ads &amp; Listing Web Application </h3>
              <p className="section3-child7p">Teck Stack-Next.js, Typescript, Tailiwind CSS, DaisyUI and WordPress as Backend</p>
            </div> 
          </div> 
        </div>
        <div className="section3-child3">
          <div>
            <div className="section3-child4">
              <img className="section3-child5" src={Image4} alt="" />
              <a className="section3-child6" href="#">Headless CMS</a>
              <h3 className="section3-child7">MetaAds- Classified Ads &amp; Listing Web Application </h3>
              <p className="section3-child7p">Teck Stack-Next.js, Typescript, Tailiwind CSS, DaisyUI and WordPress as Backend</p>
            </div>
          </div>
          <div className="section3-child10">
            <div className="section3-child8">
              <img className="section3-child5" src={Image5} alt="" />
              <a className="section3-child6" href="#">Headless CMS</a>
              <h3 className="section3-child7">MetaAds- Classified Ads &amp; Listing Web Application </h3>
              <p className="section3-child7p">Teck Stack-Next.js, Typescript, Tailiwind CSS, DaisyUI and WordPress as Backend</p>
            </div>
          </div>
          <div>
            <div className="section3-child4">
              <img className="section3-child5" src={Image2}alt="" />
              <a className="section3-child6" href="#">Headless CMS</a>
              <h3 className="section3-child7">MetaAds- Classified Ads &amp; Listing Web Application </h3>
              <p className="section3-child7p">Teck Stack-Next.js, Typescript, Tailiwind CSS, DaisyUI and WordPress as Backend</p>
            </div> 
          </div> 
        </div>
     
        <div>
          <button className="section3-child11">See Our Products <span><img className="section3-child12" src={Image7} alt="" /></span></button>
        </div>
      </section>
    </div>
  )
}
