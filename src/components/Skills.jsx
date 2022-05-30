import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
    render() {
        const skills = this.props.skills;
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
                                    className="skill-img rounded-div"
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
