import React, { useState, useEffect } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function App() {
  const[zipcode, setZipcode] = useState();

  useEffect(() => {
    axios({
      "method":"GET",
      "url":"https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation",
      "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
        "x-rapidapi-key":"de1d479e2fmsh29b0dda09cdd472p18faf0jsn2a1266abd3dc",
        "useQueryString":true
      },
      "params":{
        "apikey":"873dbe322aea47f89dcf729dcc8f60e8"
      }
    })
    .then((response)=>{
      console.log(response);
      setZipcode(response.data.zipCode);
    })
    .catch((error)=>{
      console.log(error)
    });
  },[]);

  useEffect(() => {
    console.log(zipcode);
  }, [zipcode]);


  return (
    <div className="App" path='/'>
      <header>
        <button>
          <h1><FontAwesomeIcon icon={faBars} /></h1>
        </button>
        <h1>MDNight</h1>
      </header>
      <main>
        <div>
          <div>
            Hello! <FontAwesomeIcon icon={faCoffee} />
            <label htmlFor='zipcode'>Please Enter Your zipcode to get started!</label>
          </div>
          <div>
            <input name='zipcode' type="text" pattern="[0-9]{5}" placeholder='ex. 12345' onChange={(e) => setZipcode(e.target.value)} />
          </div>
        </div>
        <button>Get Started!</button>
      </main>
      <footer>
        <h2>Copyright 2020</h2>
      </footer>
    </div>
  );
}

export default App;
