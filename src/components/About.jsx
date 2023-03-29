import React, { Component } from "react";
import "./About.css";

class About extends Component {
    render() {
        return (
            <div className="about section">
                <h5 className="title">ABOUT ME</h5>
                <div className="about-container">
                    <img
                        src="https://www.pdsa.org.uk/media/10070/pug-gallery-1.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132430207260000000"
                        width="300"
                        height="300"
                        alt=""
                        className="profile-img rounded-div box-shadow"
                    />
                    <div className="textbox-container rounded-div box-shadow">
                        <div className="textbox-head"></div>
                        <div className="textbox-body">
                            Enthusiastic software developer with a keen eye for
                            detail. Well versed in ES6 Javascript and Core Java.
                            Proficient in the MERN stack, Testing libraries such
                            as JEST, JUnit, Cypress, Database technologies such
                            as MySQL, Postgresql and MongoDB, Styling libraries
                            such as TailwindCSS, Bootstrap and MaterialUI. Able
                            to adapt to new technologies and resources as
                            needed. Although I like working with frontend or UI
                            technologies, I am also keen in learning everything
                            backend.
                            <br />
                            <br />
                            In my spare time I like to play video games or just
                            chill watching some youtube videos. I like to go on
                            long hikes or just a casual morning run to help
                            maintain a positive mindset. My favourite fictional
                            book is one of Dan Brown's finest, Angels & Demons
                            and non-fictional book is by Briane Greene, The
                            Elegant Universe.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
