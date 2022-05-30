import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
    render() {
        const projects = this.props.projects;
        return (
            <div className="projects section">
                <h5 className="title">PROJECTS</h5>
                <div className="projects-container">
                    {projects.map((project) => {
                        return (
                            <div key={project.name} className="project ">
                                <h5>{project.name}</h5>
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="rounded-div"
                                />
                                <ul className="technologies">
                                    {project.technologies.map((technology) => {
                                        return <li>{technology}</li>;
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;
