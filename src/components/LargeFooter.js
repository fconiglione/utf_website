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
                            <li><a href="https://utf.ai/what-is-utf/">What is UTF?</a></li>
                            <li><a href="https://utf.ai/get-started/">Get Started</a></li>
                            <li><a href="https://utf.ai/education/">Education</a></li>
                            <li><a href="https://utf.ai/customer-stories/">Customer Stories</a></li>
                        </ul>
                    </div>
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Company</li>
                            <li><a href="https://utf.ai/careers/">Careers</a></li>
                            <li><a href="https://utf.ai/newsroom/">Newsroom</a></li>
                            <li><a href="https://utf.ai/investors/">Investor Relations</a></li>
                            <li><a href="https://utf.ai/about/">About UTF</a></li>
                        </ul>
                    </div>
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Resources</li>
                            <li><a href="https://utf.ai/support/">Support</a></li>
                            <li><a href="https://utf.ai/help-center/">Help Center</a></li>
                            <li><a href="https://utf.ai/licensing-faqs/">Licensing FAQs</a></li>
                            <li><a href="https://utf.ai/contact/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="middle-footer-container">
                        <ul>
                            <li className="footer-nav-title">Popular Links</li>
                            <li><a href="https://utf.ai/saturn-crm/">Saturn CRM</a></li>
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
                        <p><a href="https://utf.ai/privacy-policy/">Privacy Policy</a> | <a href="https://utf.ai/terms-of-use/">Terms of Use</a> | <a href="https://utf.ai/site-map/">Site Map</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LargeFooter;