import React from "react";
import AstronautIcon from '../assets/404-icon.png';
import "../styles/app.css";
import "../styles/notfound.css";

function NotFound() {
    return (
        <main>
            <section class="not-found">
                <div>
                    <div>
                        <h1>Oops, that page doesn't exist.</h1>
                        <h3>We're not sure how you got out here, but let's bring you back home.</h3>
                    </div>
                    <div class="take-me-home-btn btn">
                        <a href="https://utf.ai/">Take Me Home</a>
                    </div>
                </div>
                <div class="not-found-img-container">
                    <img src={AstronautIcon} alt="An illustrated astronaut drifts away from Earth into space."/>
                </div>
            </section>
        </main>
    );
}
export default NotFound;
