import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </div>
    </Router>
  ); 
}

export default App;
