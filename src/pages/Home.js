import React from "react";
import Placeholder from '../assets/utf-placeholder.png';
import LandingImg1 from '../assets/landing-img-1.png';
import BenefitsImg1 from '../assets/benefits-img-1.png';
import BenefitsImg2 from '../assets/benefits-img-2.png';
import BenefitsImg3 from '../assets/benefits-img-3.png';
import BenefitsImg4 from '../assets/benefits-img-4.png';
import FreeEducationLicenses from '../assets/free-education-licenses-img.png';
import AccessTutorials from '../assets/access-tutorials-img.png';
import MastheadPreview from '../assets/laptop-phone-tablet-saturn-crm-preview.jpg';
import "../styles/home.css";

function Home() {
    return (
        <main>
            <section className="masthead">
                <div className="masthead-container">
                    <div>
                        <h1>Harness the Future with Data-Driven, AI-Backed Solutions.</h1>
                    </div>
                    <div>
                        <h4>Introducing Saturn CRM - Watch our demo and experience the future of customer relations firsthand.</h4>
                    </div>
                    <div>
                        <a className="btn" href="#">Start Free Trial</a>
                        <a className="nav-btn" href="#">Watch Demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="masthead-container">
                    <img src={MastheadPreview} alt="The Saturn CRM web app is shown on a tablet, laptop, and mobile phone." />
                </div>
            </section>
            <section className="newsroom-preview">
                <div>
                    <h1>What's new at UTF?</h1>
                </div>
                <div>
                    <a href="#">
                        <div>
                            <img src={Placeholder} alt="This is a placeholder image." />
                        </div>
                        <div>
                            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                            <h6>October 24, 2023</h6>
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <img src={Placeholder} alt="This is a placeholder image." />
                        </div>
                        <div>
                            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                            <h6>October 24, 2023</h6>
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            <img src={Placeholder} alt="This is a placeholder image." />
                        </div>
                        <div>
                            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                            <h6>October 24, 2023</h6>
                        </div>
                    </a>
                </div>
            </section>
            <section className="perks">
                <div>
                    <h1>Learn how UTF can help your business save time and money.</h1>
                </div>
                <div className="perks-container">
                    <div className="perks-item">
                        <div>
                            <img src={BenefitsImg1} alt="An illustrative icon showing a man giving a work-related presentation." />
                        </div>
                        <div>
                            <h5>Improved Efficiency</h5>
                        </div>
                        <div>
                            <h5>Streamline and automate various business processes, reducing manual labor and human errors.</h5>
                        </div>
                        <div>
                            <a href="#">Learn More <i className="fa-solid fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div className="perks-item">
                        <div>
                            <img src={BenefitsImg2} alt="An illustrative icon showing a woman budgeting for her business on her laptop." />
                        </div>
                        <div>
                            <h5>Cost Reduction</h5>
                        </div>
                        <div>
                            <h5>Save time and money with optimized resource allocation, reduced waste, and data-driven solutions.</h5>
                        </div>
                        <div>
                            <a href="#">Learn More <i className="fa-solid fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div className="perks-item">
                        <div>
                            <img src={BenefitsImg3} alt="#" />
                        </div>
                        <div>
                            <h5>Enhanced Productivity</h5>
                        </div>
                        <div>
                            <h5>Our software empowers employees to work more productively, as they can focus on complex tasks.</h5>
                        </div>
                        <div>
                            <a href="#">Learn More <i className="fa-solid fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div className="perks-item">
                        <div>
                            <img src={BenefitsImg4} alt="#" />
                        </div>
                        <div>
                            <h5>Data-Driven Decision Making</h5>
                        </div>
                        <div>
                            <h5>Our solutions provide valuable insights through data analytics to help make informed decisions.</h5>
                        </div>
                        <div>
                            <a href="#">Learn More <i className="fa-solid fa-caret-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="free-access">
                <div>
                    <h1>Empowering future innovators with learning and free access.</h1>
                </div>
                <div className="free-access-container">
                    <div>
                        <a href="#">
                            <img src={FreeEducationLicenses} alt="A female student works on her laptop while wearing headphones."/>
                        </a>
                        <a href="#">Students get free educational licenses <i className="fa-solid fa-angles-right"></i></a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={AccessTutorials} alt="A male employee is assisted by a female employee while completing work on a computer."/>
                        </a>
                        <a href="#">Access tutorials to explore our products <i className="fa-solid fa-angles-right"></i></a>
                    </div>
                </div>
            </section>
            <section className="landing">
                <div>
                    <h1>Try UTF products for free.<br />
                        No credit card required.<br />
                        No software to install.
                    </h1>
                </div>
                <div>
                    <a className="btn" href="#">Start Free Trial</a>
                </div>
                <div>
                    <img src={LandingImg1} alt=""/>
                </div>
            </section>
        </main>
    );
}

export default Home;
