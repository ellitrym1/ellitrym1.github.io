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
                            <div className="project">
                                <h5>{project.name}</h5>
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="rounded-div box-shadow"
                                />

                                <div style={{ paddingTop: "20px" }}>
                                    <a
                                        className="github-url"
                                        href={project.githuburl}
                                    >
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                                            alt="github-url"
                                        />
                                    </a>
                                    {project.demourl !== "" ? (
                                        <a
                                            className="demo-url"
                                            href={project.demourl}
                                        >
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/5130/5130427.png"
                                                alt="demo-url"
                                            />
                                        </a>
                                    ) : (
                                        ""
                                    )}
                                    <ul className="technologies">
                                        {project.technologies.map(
                                            (technology) => {
                                                return <li>{technology}</li>;
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;
