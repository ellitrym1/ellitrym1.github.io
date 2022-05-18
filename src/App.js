import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Landing />
            <About />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
