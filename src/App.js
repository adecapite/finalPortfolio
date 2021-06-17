import Bio from "./Components/bio"
import Footer from "./Components/footer"
import './App.css';
import './style.css'

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
