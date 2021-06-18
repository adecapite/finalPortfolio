import Bio from "./Components/bio"
import Footer from "./Components/footer"
import './style.css'
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom"
import Projects from "./Components/projects";
import Navbar from "./Components/nav/nav";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Bio />
     <Projects />
     <Footer />
    </div>
  );
}

export default App;
