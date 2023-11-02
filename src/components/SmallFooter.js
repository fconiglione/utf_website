import React from 'react';
import Logo from '../assets/utf-footer-logo.png';
import "../styles/footer.css";

function SmallFooter() {
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
                                <a href="#">What is UTF?</a>
                            </div>
                            <div>
                                <a href="#">Get Started</a>
                            </div>
                            <div>
                                <a href="#">Education</a>
                            </div>
                            <div>
                                <a href="#">Customer Stories</a>
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
                                <a href="#">Careers</a>
                            </div>
                            <div>
                                <a href="#">Newsroom</a>
                            </div>
                            <div>
                                <a href="#">Investor Relations</a>
                            </div>
                            <div>
                                <a href="#">About UTF</a>
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
                                <a href="#">Support</a>
                            </div>
                            <div>
                                <a href="#">Help Center</a>
                            </div>
                            <div>
                                <a href="#">Licensing FAQs</a>
                            </div>
                            <div>
                                <a href="#">Contact</a>
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
                                <a href="#">Saturn CRM</a>
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
                                <a href="#">LinkedIn</a>
                            </div>
                            <div>
                                <a href="#">Twitter</a>
                            </div>
                            <div>
                                <a href="#">Instagram</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-bottom-footer">
                    <div>
                        <p>Copyright &copy; <span className="current-year"></span> Universal Technology Framework (UTF). All Rights Reserved.</p>
                    </div>
                    <div>
                        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | <a href="#">Site Map</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallFooter;