import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import FeaturedProjects from './pages/FeaturedProjects';
import AllProjects from './pages/AllProjects';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/elle-portfolio/' element={<Home/>}></Route>
          {/* PROJECTS */}
          <Route path='/elle-portfolio/projects' element={<FeaturedProjects/>}></Route>
          <Route path='/elle-portfolio/project/:id' element={<Project/>}></Route>
          <Route path='/elle-portfolio/allprojects' element={<AllProjects/>}></Route>
          {/* EXPERIENCE */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
