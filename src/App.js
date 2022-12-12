
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Experience from './pages/Experience.js';
import AboutMe from './pages/Aboutme.js';
import Projects from './pages/Projects.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
function App() {
  return (
    <div className="page-continer">
    <div className="content-wrap">
    <div className="App"> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/project/:id" element = {<ProjectDisplay />} />
          <Route path = "/experience" element = {<Experience />} />
          <Route path = "/aboutme" element = {<AboutMe />} />
        </Routes>
        <Footer/>
        
      </Router>
    </div>
    </div>
    </div>
  );
}

export default App;
