import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        Starting Again!
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/elle-portfolio/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
