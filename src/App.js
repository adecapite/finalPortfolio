import Bio from "./Components/bio"
import Footer from "./Components/footer"
import './App.css';
import Navigation from "./Components/nav";
import Projects from "./Components/projects";

function App() {
  return (
    <div className="App">
     <Navigation />
     <Bio />
     <Footer />
     <Projects />
     
    </div>
  );
}

export default App;
