import React, { Component } from "react";
import "./Landing.css";
import Socials from "./Socials";

class Landing extends Component {
    render() {
        return (
            <div className="landing section">
                <div className="landing-container">
                    <h1>ELLITRYM1</h1>
                    <h3>Aditya Ratna Shakya</h3>
                    <h5>Software Engineer</h5>
                    <Socials />
                </div>
            </div>
        );
    }
}

export default Landing;
