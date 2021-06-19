import Bio from "./Components/bio"
import Footer from "./Components/footer"
import './style.css'
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom"
import Projects from "./Components/projects";
import Navbar from "./Components/nav/nav";

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Switch>
     {/* <Bio />
     <Projects /> */}
     <Route exact path="/" component={Bio}></Route>
     <Route exact path="/Projects" component={Projects}></Route>
     
     </Switch>
   
     <Footer />
    </div>
    </Router>
  
  );
}

export default App;
