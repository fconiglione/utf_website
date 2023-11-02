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

        const productsButton = document.getElementById("products-btn");
        const productsContent = document.getElementById("products-content");
        const contentPlaceholder = document.getElementById("content-placeholder");
        const aiButton = document.getElementById("ai-btn");
        const aiContent = document.getElementById("ai-content");
        const educationButton = document.getElementById("education-btn");
        const educationContent = document.getElementById("education-content")
        const supportButton = document.getElementById("support-btn");
        const supportContent = document.getElementById("support-content");
        const moreButton = document.getElementById("more-btn");
        const moreContent = document.getElementById("more-content");
        let isContentVisible = false;

        productsButton.addEventListener("click", function () {
            if (isContentVisible) {
                productsContent.style.display = "none";
                contentPlaceholder.innerHTML = "";
                productsButton.classList.remove("active");
                educationButton.classList.remove("active");
                aiButton.classList.remove("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            } else {
                productsContent.style.display = "flex";
                contentPlaceholder.innerHTML = "";
                contentPlaceholder.appendChild(productsContent);
                productsButton.classList.add("active");
                aiButton.classList.remove("active");
                educationButton.classList.remove("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            }
            isContentVisible = !isContentVisible;
        });
        aiButton.addEventListener("click", function () {
            if (isContentVisible) {
                aiContent.style.display = "none";
                contentPlaceholder.innerHTML = "";
                aiButton.classList.remove("active");
                educationButton.classList.remove("active");
                productsButton.classList.remove("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            } else {
                aiContent.style.display = "flex";
                contentPlaceholder.innerHTML = "";
                contentPlaceholder.appendChild(aiContent);
                aiButton.classList.add("active");
                productsButton.classList.remove("active");
                educationButton.classList.remove("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            }
            isContentVisible = !isContentVisible;
        });
        educationButton.addEventListener("click", function () {
            if (isContentVisible) {
                educationContent.style.display = "none";
                contentPlaceholder.innerHTML = "";
                aiButton.classList.remove("active");
                educationButton.classList.remove("active");
                productsButton.classList.remove("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            } else {
                educationContent.style.display = "flex";
                contentPlaceholder.innerHTML = "";
                contentPlaceholder.appendChild(educationContent);
                aiButton.classList.remove("active");
                productsButton.classList.remove("active");
                educationButton.classList.add("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            }
            isContentVisible = !isContentVisible;
        });
        supportButton.addEventListener("click", function () {
            if (isContentVisible) {
                supportContent.style.display = "none";
                contentPlaceholder.innerHTML = "";
                aiButton.classList.remove("active");
                educationButton.classList.remove("active");
                productsButton.classList.remove("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            } else {
                supportContent.style.display = "flex";
                contentPlaceholder.innerHTML = "";
                contentPlaceholder.appendChild(supportContent);
                supportButton.classList.add("active");
                productsButton.classList.remove("active");
                educationButton.classList.remove("active");
                aiButton.classList.remove("active");
                moreButton.classList.remove("active");
            }
            isContentVisible = !isContentVisible;
        });
        moreButton.addEventListener("click", function () {
            if (isContentVisible) {
                moreContent.style.display = "none";
                contentPlaceholder.innerHTML = "";
                aiButton.classList.remove("active");
                educationButton.classList.remove("active");
                productsButton.classList.remove("active");
                supportButton.classList.remove("active");
                moreButton.classList.remove("active");
            } else {
                moreContent.style.display = "flex";
                contentPlaceholder.innerHTML = "";
                contentPlaceholder.appendChild(moreContent);
                moreButton.classList.add("active");
                productsButton.classList.remove("active");
                educationButton.classList.remove("active");
                supportButton.classList.remove("active");
                aiButton.classList.remove("active");
            }
            isContentVisible = !isContentVisible;
        });
    }, []);

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