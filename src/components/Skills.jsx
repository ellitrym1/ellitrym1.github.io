import React, { Component } from "react";
import "./Skills.css";
const skills = require("../skills.json");

class Skills extends Component {
    render() {
        return (
            <div className="skills section">
                <h5 className="title">SKILLS</h5>
                <div className="skills-container">
                    {skills.map((skill) => {
                        return (
                            <div key={skill.name} className="skill">
                                <p className="skill-name">{skill.name}</p>
                                <img
                                    src={skill.img}
                                    alt={skill.name}
                                    className="skill-img"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Skills;
