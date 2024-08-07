import React from "react";
import "./Card5.css";
import Image1 from "../assets/card5/html1.png";
import Image2 from "../assets/card5/css.png";
import Image3 from "../assets/card5/sunflower.png";

export default function Card5() {
  return (
    <div>
      <section>
        <div className="card-parent mt-5 ms-md-5 me-md-5 ms-lg-4 me-lg-4">
          {[...Array(10)].map((_, index) => (
            <div className={`card-child effect-form5 ${index === 2 ? 'tab-card' : ''} ${index >= 3 ? 'desk-card' : ''}`} key={index}>
              <figure className="fig-div">
                <div className="fig-child">
                  <h4 className="section5-h3">Login</h4>
                  <p className="p6">Lorem ipsum, dolor sit amet</p>
                  <input type="text" className="fig-inp" /> <br />
                  <input type="text" className="fig-inp" /> <br />
                  <button className="fig-button">Submit</button>
                  <p className="p6">Lorem ipsum, dolor sit amet</p>
                </div>
                <figcaption className="figcaption">
                  <h4>Features</h4>
                  <div className="img-div">
                    <span>
                      <img src={Image1} className="card5-img1" alt="img" />
                    </span>
                    <span>
                      <img src={Image2} className="card5-img2" alt="img" />
                    </span>
                  </div>
                  <div className="div-last">
                    <p className="p6">
                      <span className="clr-26">26</span> Components{" "}
                      <span className="img-span">
                        <img src={Image3} className="card5-img3" alt="img" />
                      </span>
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>
      <div className="la-div">
        <button className="lbtn mt-2 mt-md-4">See All UI Kits →</button>
      </div>
    </div>
  );
}
