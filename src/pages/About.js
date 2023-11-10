import React from "react";
import VideoPlaceholder from '../assets/video-placeholder.mp4';
import AboutValuesImg1 from '../assets/about-values-img-1.png';
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
                    <div>
                        <h6>OUR VALUES</h6>
                        <h1>We fuse business and technology</h1>
                        <h5>At our core, we are driven by a profound mission to leverage cutting-edge technology for the betterment of our world. By harnessing the power of technology, we envision a future where every individual and organization can thrive, creating a more connected, sustainable, and inclusive world.</h5>                    </div>
                    <div>
                        <img src={AboutValuesImg1} alt="A diagram demonstrating the different compay values at UTF."/>
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