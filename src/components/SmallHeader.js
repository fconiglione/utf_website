import React, { useEffect } from 'react';
import Logo from '../assets/utf-header-logo.png';
import "../styles/header.css";

function SmallHeader() {
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
        <div className="small-header">
            <div className="small-screen-header">
                <div className="small-screen-header-column">
                    <div className="hamburger" id="hamburger">
                        <a href="#">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </a>
                    </div>
                    <div className="small-screen-nav" id="small-screen-nav">
                        <div className="small-dropdown">
                            <button className="small-dropdown-btn" id="small-products-btn">
                                <span>Products</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                            <div className="small-dropdown-content" id="small-products-content">
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                            </div>
                        </div>
                        <div className="small-dropdown">
                            <button className="small-dropdown-btn" id="small-ai-btn">
                                <span>AI Solutions</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                            <div className="small-dropdown-content" id="small-ai-content">
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                            </div>
                        </div>
                        <div className="small-dropdown">
                            <button className="small-dropdown-btn" id="small-education-btn">
                                <span>Education</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                            <div className="small-dropdown-content" id="small-education-content">
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                            </div>
                        </div>
                        <div className="small-dropdown">
                            <button className="small-dropdown-btn" id="small-support-btn">
                                <span>Support</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                            <div className="small-dropdown-content" id="small-support-content">
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                            </div>
                        </div>
                        <div className="small-dropdown">
                            <button className="small-dropdown-btn" id="small-more-btn">
                                <span>More</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                            <div className="small-dropdown-content" id="small-more-content">
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                                <div>
                                    <a href="#"><i className="fa-solid fa-turn-up"></i> Lorem Ipsum</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-header-logo">
                        <a href="https://utf.ai/">
                            <img src={Logo} alt="UTF Header Logo" />
                        </a>
                    </div>
                </div>
                <div className="small-screen-header-column">
                    <div className="small-login">
                        <a href="#"><i className="fa-regular fa-user"></i> Login</a>
                    </div>
                    <div>
                        <button className="small-free-trial-btn btn">
                            <a href="#">Start Free Trial</a>
                        </button>
                    </div>
                </div>
            </div>
            <div id="small-content-placeholder"></div>
        </div>
    );
}

export default SmallHeader;