import React, {useEffect} from 'react';
import Logo from '../assets/utf-header-logo.png';
import "../styles/header.css";

function SmallHeader() {
    useEffect(() => {
        const hamburgerButton = document.getElementById('hamburger');
        const smallScreenNav = document.getElementById('small-screen-nav');
        const smallContentPlaceholder = document.getElementById('small-content-placeholder');
        let isMenuActive = false;

        hamburgerButton.addEventListener('click', function () {
            isMenuActive = !isMenuActive; // Toggle the boolean flag

            if (isMenuActive) {
                hamburgerButton.classList.add('active');
                smallScreenNav.style.display = "flex";
                if (!smallContentPlaceholder.contains(smallScreenNav)) {
                    smallContentPlaceholder.appendChild(smallScreenNav);
                }
            } else {
                hamburgerButton.classList.remove('active');
                if (smallContentPlaceholder.contains(smallScreenNav)) {
                    smallContentPlaceholder.removeChild(smallScreenNav);
                }
            }
        });

        const sectionData = [
            {
                buttonId: 'small-products-btn',
                contentId: 'small-products-content',
            },
            {
                buttonId: 'small-ai-btn',
                contentId: 'small-ai-content',
            },
            {
                buttonId: 'small-education-btn',
                contentId: 'small-education-content',
            },
            {
                buttonId: 'small-support-btn',
                contentId: 'small-support-content',
            },
            {
                buttonId: 'small-more-btn',
                contentId: 'small-more-content',
            },
        ];

        let activeSection = null;

        function toggleSection(sectionId) {
            if (sectionId === activeSection) {
                const button = document.getElementById(sectionId);
                const content = document.getElementById(sectionId.replace('-btn', '-content'));

                button.classList.remove('active');
                content.style.display = 'none';

                activeSection = null; // No active section
            } else {
                if (activeSection) {
                    toggleSection(activeSection);
                }

                sectionData.forEach((section) => {
                    const button = document.getElementById(section.buttonId);
                    const content = document.getElementById(section.contentId);

                    if (section.buttonId === sectionId) {
                        button.classList.add('active');
                        content.style.display = 'flex';
                    } else {
                        button.classList.remove('active');
                        content.style.display = 'none';
                    }
                });

                activeSection = sectionId;
            }
        }

        sectionData.forEach((section) => {
            const button = document.getElementById(section.buttonId);

            button.addEventListener('click', function () {
                toggleSection(section.buttonId);
            });
        });

    }, []);
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
                                    <a href="https://utf.ai/saturn-crm/"><i className="fa-solid fa-turn-up"></i> Saturn CRM</a>
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
                                    <a href="https://utf.ai/machine-learning/"><i className="fa-solid fa-turn-up"></i> Machine Learning</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/natural-language-processing/"><i className="fa-solid fa-turn-up"></i> Natural Language Processing</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/computer-vision/"><i className="fa-solid fa-turn-up"></i> Computer Vision</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/ai-ethics/"><i className="fa-solid fa-turn-up"></i> AI Ethics</a>
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
                                    <a href="https://utf.ai/utf-academy/"><i className="fa-solid fa-turn-up"></i> UTF Academy</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/educational-licenses/"><i className="fa-solid fa-turn-up"></i> Free Education Licenses</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/python-for-education/"><i className="fa-solid fa-turn-up"></i> Python For Education</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/internships/"><i className="fa-solid fa-turn-up"></i> Internships</a>
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
                                    <a href="https://utf.ai/documentation/"><i className="fa-solid fa-turn-up"></i> Documentation</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/community/"><i className="fa-solid fa-turn-up"></i> Community</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/help-center/"><i className="fa-solid fa-turn-up"></i> Help Center</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/community/"><i className="fa-solid fa-turn-up"></i> Community</a>
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
                                    <a href="https://utf.ai/about/"><i className="fa-solid fa-turn-up"></i> About</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/partners/"><i className="fa-solid fa-turn-up"></i> Partners</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/careers/"><i className="fa-solid fa-turn-up"></i> Careers</a>
                                </div>
                                <div>
                                    <a href="https://utf.ai/research/"><i className="fa-solid fa-turn-up"></i> Research</a>
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
                        <a href="https://utf.ai/login/"><i className="fa-regular fa-user"></i> Login</a>
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