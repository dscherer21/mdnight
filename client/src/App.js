import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/landingpage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App text-center">
          <Switch>
            <Route exact path='/' component={LandingPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
