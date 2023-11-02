import React from 'react';
import Logo from '../assets/utf-footer-logo.png';
import "../styles/footer.css";

function LargeFooter() {
    return (
        <div className="large-footer">
            <div className="large-screen-footer">
                <div className="top-footer">
                    <div>
                        <a href="https://utf.ai/">
                            <img src={Logo} alt="UTF Footer Logo" />
                        </a>
                    </div>
                </div>
                <div className="middle-footer">
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Explore UTF</li>
                            <li><a href="#">What is UTF?</a></li>
                            <li><a href="#">Get Started</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Customer Stories</a></li>
                        </ul>
                    </div>
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Company</li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">About UTF</a></li>
                        </ul>
                    </div>
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Resources</li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Licensing FAQs</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Popular Links</li>
                            <li><a href="#">Saturn CRM</a></li>
                        </ul>
                    </div>
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Follow Us</li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer">
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

export default LargeFooter;