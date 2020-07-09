import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LandingPage from './components/landingPage';

function App() {
  const[zipcode, setZipcode] = useState('');

  return (
    <Router>
      <div className="App">
        <header className='container'>
          <div className='row'>
            <div className='col-1'>
              <button>
                <h1><FontAwesomeIcon icon={faBars} /></h1>
              </button>
            </div>
            <div className='col'>
              <h1>MDNight</h1>
            </div>
          </div>
        </header>
        <Switch>
          <Route path='/'>
            <LandingPage zipcode={zipcode} setZipcode={setZipcode} />
          </Route>
        </Switch>
        <footer className='container'>
          <h2>Copyright 2020</h2>
        </footer>
      </div>
    </Router>
  );
}

export default App;
