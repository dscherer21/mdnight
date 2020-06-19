import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function App() {

  axios({
    "method":"GET",
    "url":"https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/",
    "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"ip-geolocation-ipwhois-io.p.rapidapi.com",
      "x-rapidapi-key":"de1d479e2fmsh29b0dda09cdd472p18faf0jsn2a1266abd3dc",
      "useQueryString":true
    }
  }).then((response)=>{
    console.log(response)
  }).catch((error)=>{
    console.log(error)
  });

  return (
    <div className="App" path='/'>
      Hello! <FontAwesomeIcon icon={faCoffee} />
      <div>
        <div>
          <label htmlFor='zipcode'>Please Enter Your zipcode to get started!</label>
        </div>
        <div>
          <input name='zipcode' />
        </div>
      </div>
    </div>
  );
}

export default App;
