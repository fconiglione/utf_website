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
                                    <a href="https://utf.ai/saturn-crm/">
                                        <p>Saturn CRM</p>
                                        <p>Optimize business-customer relationships with cost-effective solutions.</p>
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
                                    <a href="https://utf.ai/machine-learning/">
                                        <p>Machine Learning</p>
                                        <p>Empower your business with machine learning solutions.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/natural-language-processing/">
                                        <p>Natural Language Processing</p>
                                        <p>Transform text data with advanced NLP techniques.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/computer-vision/">
                                        <p>Computer Vision</p>
                                        <p>Augment visual analysis through computer vision technology.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/ai-ethics/">
                                        <p>AI Ethics</p>
                                        <p>Delve into AI ethics and responsible AI practices.</p>
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
                                    <a href="https://utf.ai/utf-academy/">
                                        <p>UTF Academy</p>
                                        <p>Explore UTF Academy for individual knowledge and growth.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/educational-licenses">
                                        <p>Free Education Licenses</p>
                                        <p>Students and educators get access to free educational licenses.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/python-for-education/">
                                        <p>Python For Education</p>
                                        <p>Empowering students with Python for the future of AI technologies.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/internships/">
                                        <p>Internships</p>
                                        <p>Embark on internship opportunities for hands-on experience.</p>
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
                                    <a href="https://utf.ai/documentation/">
                                        <p>Documentation</p>
                                        <p>Access our comprehensive documentation for guidance and information on products.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/community/">
                                        <p>Community</p>
                                        <p>Uncover our thriving community of learners and enthusiasts.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/help-center/">
                                        <p>Help Center</p>
                                        <p>Find solutions and assistance to common problems in our Help Center.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/contact/">
                                        <p>Contact</p>
                                        <p>Get in touch with us. We're here to answer your questions.</p>
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
                                    <a href="https://utf.ai/about/">
                                        <p>About UTF</p>
                                        <p> Learn about our mission in the world of technology and AI.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/partners/">
                                        <p>Partners</p>
                                        <p>Explore our valued partners and collaborators who help us drive innovation.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/careers/">
                                        <p>Careers</p>
                                        <p>Embark on your career with exciting career opportunities at UTF.</p>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/research/">
                                        <p>Research</p>
                                        <p>Dive into the world of cutting-edge research in AI and technology.</p>
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