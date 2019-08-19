import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Registr from './components/registration/registration';
import Home from './components/home/home';
import About from './components/about/about';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
          <ul>
            <li><Link to="/">Registration</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route exact path="/" component={Registr} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
      </Router>
    </div> 
  );
}

export default App;
