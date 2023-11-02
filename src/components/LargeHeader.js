import React, { useEffect } from 'react';
import Logo from '../assets/utf-header-logo.png';
import "../styles/header.css";

function LargeHeader() {
    useEffect(() => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const buttonElements = document.querySelectorAll('.btn');

        if (currentMonth >= 2 && currentMonth <= 4) {
            buttonElements.forEach((element) => element.classList.add('spring'));
        } else if (currentMonth >= 5 && currentMonth <= 7) {
            buttonElements.forEach((element) => element.classList.add('summer'));
        } else if (currentMonth >= 8 && currentMonth <= 10) {
            buttonElements.forEach((element) => element.classList.add('autumn'));
        } else {
            buttonElements.forEach((element) => element.classList.add('winter'));
        }
    }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

    return (
        <div className="large-header">
            <div className="large-screen-header">
                <div className="large-screen-header-column">
                    <div>
                        <div className="large-header-logo">
                            <a href="https://utf.ai/">
                                <img src={Logo} alt="UTF Header Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="large-screen-header-nav">
                        <div className="dropdown">
                            <button className="dropdown-btn" id="products-btn">Products
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="dropdown-content" id="products-content">
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-btn" id="ai-btn">AI Software
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="dropdown-content" id="ai-content">
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-btn" id="education-btn">Education
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="dropdown-content" id="education-content">
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-btn" id="support-btn">Support
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="dropdown-content" id="support-content">
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropdown-btn" id="more-btn">More
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <div className="dropdown-content" id="more-content">
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <p>Lorem ipsum</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="large-screen-header-column">
                    <div className="login">
                        <a href="#"><i className="fa-regular fa-user"></i> Login</a>
                    </div>
                    <div>
                        <button className="free-trial-btn btn">
                            <a href="#">Start Free Trial</a>
                        </button>
                    </div>
                </div>
            </div>
        <div id="content-placeholder"></div>
    </div>
    );
}

export default LargeHeader;