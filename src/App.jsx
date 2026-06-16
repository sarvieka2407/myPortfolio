import Navbar from "./Navbar";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./projects";
import Journey from "./Journey";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar name="Sarvika Sharma" />

      <main>
        <Hero />

        <div className="section-divider"></div>

        <Skills />

        <div className="section-divider"></div>

        <Projects />

        <div className="section-divider"></div>

        <Journey />
        
        <Footer />

      </main>
    </>
  );
}

export default App;