import React, { Component } from "react";
import "./Footer.css";
import Socials from "./Socials";

class Footer extends Component {
    render() {
        return (
            <div className="footer section">
                <Socials />
                <span>Created by Aditya Ratna Shakya</span>
            </div>
        );
    }
}

export default Footer;
