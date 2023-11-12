import React from "react";
import VideoPlaceholder from '../assets/video-placeholder.mp4';
import AboutImpactsImg1 from '../assets/about-impacts-img-1.jpg';
import AboutImpactsImg2 from '../assets/about-impacts-img-2.jpg';
import AboutImpactsImg3 from '../assets/about-impacts-img-3.jpg';
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
                                <h2>Reliability</h2>
                            </div>
                            <div>
                                <h6>Prioritizing the utmost dependability in every aspect of our services, providing our clients with a robust foundation to succeed.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-lightbulb"></i>
                                <h2>Innovation</h2>
                            </div>
                            <div>
                                <h6>Our commitment goes beyond the conventional, striving to redefine industry standards and propel our clients toward future success.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-heart"></i>
                                <h2>Passion</h2>
                            </div>
                            <div>
                                <h6>Fueled by an unwavering passion for excellence and customer experience, we pour our hearts into every single project.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-handshake"></i>
                                <h2>Integrity</h2>
                            </div>
                            <div>
                                <h6>Guided by an unwavering commitment to honesty and transparency, we uphold the highest standards of integrity in every facet of our work.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-users"></i>
                                <h2>Commitment</h2>
                            </div>
                            <div>
                                <h6>With a steadfast dedication, we go beyond promises, ensuring that each endeavor is marked by a relentless pursuit of mutual success.</h6>
                            </div>
                        </div>
                        <div className="values-item">
                            <div>
                                <i className="fa-solid fa-earth-americas"></i>
                                <h2>Impact</h2>
                            </div>
                            <div>
                                <h6>Working for impactful change through environmental initiatives, open-source projects, and digital inclusion.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-impacts">
                <div className="about-impacts-container">
                    <h6>UTF FOR CHANGE</h6>
                    <h1>Together, changing the world</h1>
                    <h5>Within the heart of UTF, we are dedicated to reshaping technology experiences and crafting business solutions that transcend convention. We champion a world marked by the simplicity, efficiency, and interconnected brilliance of our creations. Empowering entities to lead impactful change, our core initiatives focus on environmental stewardship, open-source excellence, and advancing digital inclusion.</h5>
                </div>
                <div className="about-impacts-pillar">
                    <div>
                        <img src={AboutImpactsImg1} alt="A panoramic view of Banff National Park in Alberta, Canada"/>
                    </div>
                    <div>
                        <h3>Environment</h3>
                        <h6>Climate change is the single-most challenge that humans face. UTF is taking control of its own carbon footprint, and working with organizations around the world to combat the effects of global warming.</h6>
                        <a href="#">Learn More <i className="fa-solid fa-caret-right"></i></a>
                    </div>
                </div>
                <hr/>
                <div className="about-impacts-pillar">
                    <div>
                        <img src={AboutImpactsImg2} alt="A female software engineer works on an open source project"/>
                    </div>
                    <div>
                        <h3>Open-Source Projects</h3>
                        <h6>Open-source projects are the foundation to learning and developing code. UTF has committed to transparency in all of its projects and has taken the initiative to launch and support new open-source projects regularly.</h6>
                        <a href="#">Learn More <i className="fa-solid fa-caret-right"></i></a>
                    </div>
                </div>
                <hr/>
                <div className="about-impacts-pillar">
                    <div>
                        <img src={AboutImpactsImg3} alt="Team members collaborate together on a project"/>
                    </div>
                    <div>
                        <h3>Digital Inclusion</h3>
                        <h6>Enabling universal access to technology is paramount in our digitally inclusive future. UTF leverages its technology to ensure equitable access, making universal participation in the digital realm a fundamental priority.</h6>
                        <a href="#">Learn More <i className="fa-solid fa-caret-right"></i></a>
                    </div>
                </div>
            </section>
            <section className="about-contact">

            </section>
        </main>
    );
}

export default About;