import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App" path='/'>
      Hello! <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;
