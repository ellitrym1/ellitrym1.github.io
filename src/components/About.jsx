import React, { Component } from "react";
import "./About.css";

class About extends Component {
    render() {
        return (
            <div className="about section">
                <h5 className="title">ABOUT ME</h5>
                <div className="about-container">
                    <img
                        src="https://scontent-dub4-1.xx.fbcdn.net/v/t31.18172-8/15384567_250701868680098_221870096099822876_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BoZ1_c1_wREAX9wNY62&_nc_ht=scontent-dub4-1.xx&oh=00_AT-MhFC3qIG1fmKg8JdJDwzFROdzsmDQSet6hZBj0ru_qA&oe=625806A2"
                        width="300"
                        height="300"
                        alt=""
                        className="profile-img"
                    />
                    <div className="textbox-container">
                        <div className="textbox-head"></div>
                        <div className="textbox-body"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
