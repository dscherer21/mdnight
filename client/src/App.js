import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/landingpage';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='main'>
          <Header/>

            <Route exact path='/' component={LandingPage}/>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
