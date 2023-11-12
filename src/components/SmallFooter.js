import React, {useEffect} from 'react';
import Logo from '../assets/utf-footer-logo.png';
import "../styles/footer.css";

function SmallFooter() {
    useEffect(() => {
        const footerData = [
            {
                buttonId: 'footer-explore-btn',
                contentId: 'footer-explore-content',
            },
            {
                buttonId: 'footer-company-btn',
                contentId: 'footer-company-content',
            },
            {
                buttonId: 'footer-resources-btn',
                contentId: 'footer-resources-content',
            },
            {
                buttonId: 'footer-popular-btn',
                contentId: 'footer-popular-content',
            },
            {
                buttonId: 'footer-follow-btn',
                contentId: 'footer-follow-content',
            },
        ];

        let activeFooterSection = null;

        function toggleFooterSection(sectionId) {
            if (sectionId === activeFooterSection) {
                const button = document.getElementById(sectionId);
                const content = document.getElementById(sectionId.replace('-btn', '-content'));

                button.classList.remove('active');
                content.style.display = 'none';

                activeFooterSection = null; // No active footer section
            } else {
                if (activeFooterSection) {
                    toggleFooterSection(activeFooterSection);
                }

                footerData.forEach((section) => {
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

                activeFooterSection = sectionId;
            }
        }

// Add click event listeners to all footer buttons
        footerData.forEach((section) => {
            const button = document.getElementById(section.buttonId);

            button.addEventListener('click', function () {
                toggleFooterSection(section.buttonId);
            });
        });
    }, []);
    return (
        <div className="small-footer">
            <div className="small-screen-footer">
                <div className="small-top-footer">
                    <div>
                        <a href="https://utf.ai/">
                            <img src={Logo} alt="UTF Footer Logo" />
                        </a>
                    </div>
                </div>
                <div className="small-middle-footer">
                    <div className="footer-dropdown">
                        <button className="footer-dropdown-btn" id="footer-explore-btn">
                            <span>Explore UTF</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <div className="footer-dropdown-content" id="footer-explore-content">
                            <div>
                                <a href="https://utf.ai/what-is-utf/">What is UTF?</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/get-started/">Get Started</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/education/">Education</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/customer-stories/">Customer Stories</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-dropdown">
                        <button className="footer-dropdown-btn" id="footer-company-btn">
                            <span>Company</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <div className="footer-dropdown-content" id="footer-company-content">
                            <div>
                                <a href="https://utf.ai/careers/">Careers</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/newsroom/">Newsroom</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/investors/">Investor Relations</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/about/">About UTF</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-dropdown">
                        <button className="footer-dropdown-btn" id="footer-resources-btn">
                            <span>Resources</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <div className="footer-dropdown-content" id="footer-resources-content">
                            <div>
                                <a href="https://utf.ai/support/">Support</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/help-center/">Help Center</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/licensing-faqs/">Licensing FAQs</a>
                            </div>
                            <div>
                                <a href="https://utf.ai/contact/">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-dropdown">
                        <button className="footer-dropdown-btn" id="footer-popular-btn">
                            <span>Popular Links</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <div className="footer-dropdown-content" id="footer-popular-content">
                            <div>
                                <a href="https://utf.ai/saturn-crm/">Saturn CRM</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-dropdown">
                        <button className="footer-dropdown-btn" id="footer-follow-btn">
                            <span>Follow Us</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <div className="footer-dropdown-content" id="footer-follow-content">
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/company/universal-technology-framework-utf/">LinkedIn</a>
                            </div>
                            <div>
                                <a target="_blank" href="#">Twitter</a>
                            </div>
                            <div>
                                <a target="_blank" href="#">Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-bottom-footer">
                    <div>
                        <p>Copyright &copy; <span className="current-year"></span> Universal Technology Framework (UTF). All Rights Reserved.</p>
                    </div>
                    <div>
                        <p><a href="https://utf.ai/privacy-policy/">Privacy Policy</a> | <a href="https://utf.ai/terms-of-use/">Terms of Use</a> | <a href="https://utf.ai/site-map/">Site Map</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallFooter;