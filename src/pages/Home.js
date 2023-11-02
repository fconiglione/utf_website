import React from "react";
import Placeholder from '../assets/utf-placeholder.png';
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
                            <img src={Placeholder} alt="#" />
                        </div>
                        <div>
                            <h5>Lorem ipsum</h5>
                        </div>
                        <div>
                            <h5>Lorem ipsum dolor sit amet,</h5>
                        </div>
                        <div>
                            <a href="#">Read More <i className="fa-solid fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div className="perks-item">
                        <div>
                            <img src={Placeholder} alt="#" />
                        </div>
                        <div>
                            <h5>Lorem ipsum</h5>
                        </div>
                        <div>
                            <h5>Lorem ipsum dolor sit amet,</h5>
                        </div>
                        <div>
                            <a href="#">Read More <i className="fa-solid fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div className="perks-item">
                        <div>
                            <img src={Placeholder} alt="#" />
                        </div>
                        <div>
                            <h5>Lorem ipsum</h5>
                        </div>
                        <div>
                            <h5>Lorem ipsum dolor sit amet,</h5>
                        </div>
                        <div>
                            <a href="#">Read More <i className="fa-solid fa-caret-right"></i></a>
                        </div>
                    </div>
                    <div className="perks-item">
                        <div>
                            <img src={Placeholder} alt="#" />
                        </div>
                        <div>
                            <h5>Lorem ipsum</h5>
                        </div>
                        <div>
                            <h5>Lorem ipsum dolor sit amet,</h5>
                        </div>
                        <div>
                            <a href="#">Read More <i className="fa-solid fa-caret-right"></i></a>
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
                            <img src={Placeholder} alt=""/>
                        </a>
                        <a href="#">Students get free educational licenses <i className="fa-solid fa-angles-right"></i></a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={Placeholder} alt=""/>
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
                    <img src={Placeholder} alt=""/>
                </div>
            </section>
        </main>
    );
}

export default Home;
