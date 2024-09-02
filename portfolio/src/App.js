import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import FeaturedProjects from './pages/FeaturedProjects';
import AllProjects from './pages/AllProjects';
import Project from './pages/Project';
import Experience from './pages/Experience';

import Layout from './Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='elle-portfolio/' element={<Home/>}></Route>
            {/* PROJECTS */}
            <Route path='elle-portfolio/projects' element={<FeaturedProjects/>}></Route>
            <Route path='elle-portfolio/project/:id' element={<Project/>}></Route>
            <Route path='elle-portfolio/allprojects' element={<AllProjects/>}></Route>
            {/* EXPERIENCE */}
            <Route path='elle-portfolio/experience' element={<Experience/>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
