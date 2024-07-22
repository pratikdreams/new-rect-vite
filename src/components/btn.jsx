import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './btn.css'

function BtnApp() {
    const [showContainer, setShowContainer] = useState(false);
    const [activeButton, setActiveButton] = useState('mernstack');

    const toggleContainer = () => {
        setShowContainer(!showContainer);
    };

    const filterSelection = (category) => {
        setActiveButton(category);
    };

    return (
        <div>
            <div className="dropdown" style={{ margin: '' }}>
                <button className="btn text-light  dropdown-toggle " type="button" onClick={toggleContainer}>
                   Our Product
                </button>
            </div>

            {showContainer && (
                <div className="containerb position-absolute">
                    <section className="mainsection mernstack">
                        <div id="mybbtn1Container">
                            <button
                                className={`bbtn1 ${activeButton === 'mernstack' ? 'active' : ''}`}
                                onClick={() => filterSelection('mernstack')}
                            >
                                Mern stack
                            </button>
                            <button
                                className={`bbtn1 ${activeButton === 'wordpress' ? 'active' : ''}`}
                                onClick={() => filterSelection('wordpress')}
                            >
                                Headless WordPress
                            </button>
                            <button
                                className={`bbtn1 ${activeButton === 'strapi' ? 'active' : ''}`}
                                onClick={() => filterSelection('strapi')}
                            >
                                Headless Strapi
                            </button>
                            <button
                                className={`bbtn1 ${activeButton === 'next.js' ? 'active' : ''}`}
                                onClick={() => filterSelection('next.js')}
                            >
                                Next.js Templates
                            </button>
                        </div>
                        {activeButton === 'mernstack' && (
                            <div className="second-div mern-stack-w filterDiv mernstack show">
                                <div className="sub-div">
                                    <div className="gg"></div>
                                    <div>Meta Jobs - MERN Stack Job <br /><span>Board Theme</span></div>
                                </div>
                                <div className="sub-div">
                                    <div className="dd">Meta Ads - MERN Stack<br />Classified Ads Theme</div>
                                </div>
                            </div>
                        )}
                         {activeButton === 'wordpress' && (
                            <div className="second-div mern-stack-w filterDiv wordpress show">
                                <div className="sub-div">
                                    <div className="gg"></div>
                                    <div>Headless Eoocommerse Theme</div>
                                </div>
                                <div className="sub-div">
                                    <div className="dd">Headless Wordpress Blog</div>
                                </div>
                            </div>
                        )}
                        {activeButton === 'strapi' && (
                            <div className="second-div mern-stack-w filterDiv strapi show">
                                <div className="sub-div">
                                    <div className="gg1"></div>
                                    <div>Meta Jobs - Classified Ads Nextjs Classified Theme</div>

                                </div>
                                <div className="sub-div">
                                <div className="dd">Prolist - Real Estate & Property Listing Web Application</div>
                                </div>
                            </div>
                        )}
                         {activeButton === 'next.js' && (
                            <div className="second-div mern-stack-w filterDiv next.js show">
                                <div className="sub-div">
                                    <div className="gg2"></div>
                                    <div>Metablog- Nextjs Blog Template</div>
                                  
                                </div>
                                <div className="sub-div">
                                <div className="dd">JobBoard- Nextjs Blog Template</div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            )}
        </div>
    );
}

export default BtnApp;
