import React, { Component } from "react";
import "./Socials.css";

class Socials extends Component {
    render() {
        return (
            <div className="socials">
                <ul>
                    <li>
                        <a
                            href="https://twitter.com/ellitrym1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                alt="linkedin"
                                className="social"
                                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/ellitrym1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                alt="instagram"
                                className="social"
                                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/ellitrym1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                alt="twitter"
                                className="social"
                                src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Socials;
