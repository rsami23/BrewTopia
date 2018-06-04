import React from "react";
import "./About.css";
import image from "../../images/Beer.jpg";

const About = () => (
    <div className="container">
        <h1 id="about-title" className="display-3">About BrewTopia</h1>
        <div className="row about-section">
            <div className="col-sm-6">
                <img className="about-img" src={ image } width="500px" alt="" />
            </div>
            <div className="col-sm-6">
                <h4>Inspiration for the Network</h4>
                <p>As a lover of Craft Beer I got the idea to create a network for fellow beer enthasiats like myself.
                    This is the place for enthusists to share their favorite beers that they have tried. 
                </p>
            </div>
        </div>
    </div>
)

export default About;