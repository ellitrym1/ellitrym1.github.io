import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { useState } from "react";

const project = require("./assets/projects.json");
const skill = require("./assets/skills.json");

function App() {
    const [projects] = useState(project);
    const [skills] = useState(skill);
    return (
        <div className="App">
            <Landing />
            <About />
            <Projects projects={projects} />
            <Skills skills={skills} />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
