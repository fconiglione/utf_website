import React from "react";
import VideoPlaceholder from '../assets/video-placeholder.mp4';
import "../styles/about.css";

function About() {
    return (
        <main>
            <section className="about-masthead">
                <div className="about-masthead-container">
                    <h6>OUR MISSION</h6>
                    <h1>Making business better for everyone</h1>
                    <h5>We specialize in never-before-seen technology experiences and design and implement business solutions tailored to meet unique needs. From state-of-the-art CRM software to streamlined processes, our commitment is to make business better for everyone. We believe in simplicity, efficiency, and seamless integration to empower any organization or individual and enhance overall productivity.</h5>
                </div>
                <div>
                    <video muted autoPlay controls>
                        <source src={VideoPlaceholder} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            <section className="about-values">
                <div className="about-values-container">
                    <div className="values-title">
                        <h6>OUR VALUES</h6>
                        <h1>We fuse business and technology</h1>
                        <h5>At our core, we are driven by a profound mission to leverage cutting-edge technology for the betterment of our world. By harnessing the power of technology, we envision a future where every individual and organization can thrive, creating a more connected, sustainable, and inclusive world.</h5>
                    </div>
                    <div className="values-container">
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-award"></i>
                            </div>
                            <div>
                                <h2>Reliability</h2>
                            </div>
                            <div>
                                <h6>Prioritizing the utmost dependability in every aspect of our services, providing our clients with a robust foundation to succeed.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-lightbulb"></i>
                            </div>
                            <div>
                                <h2>Innovation</h2>
                            </div>
                            <div>
                                <h6>Our commitment goes beyond the conventional, striving to redefine industry standards and propel our clients toward future success.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div>
                                <h2>Passion</h2>
                            </div>
                            <div>
                                <h6>Fueled by an unwavering passion for excellence and customer experience, we pour our hearts into every single project.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <div>
                                <h2>Integrity</h2>
                            </div>
                            <div>
                                <h6>Guided by an unwavering commitment to honesty and transparency, we uphold the highest standards of integrity in every facet of our work.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-users"></i>
                            </div>
                            <div>
                                <h2>Commitment</h2>
                            </div>
                            <div>
                                <h6>With a steadfast dedication, we go beyond promises, ensuring that each endeavor is marked by a relentless pursuit of mutual success.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-earth-americas"></i>
                            </div>
                            <div>
                                <h2>Impact</h2>
                            </div>
                            <div>
                                <h6>Working for impactful change through environmental initiatives, open-source projects, and digital inclusion.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-initiatives">

            </section>
            <section className="about-contact">

            </section>
        </main>
    );
}

export default About;