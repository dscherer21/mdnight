import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LandingPage from './components/landingPage';

function App() {
  const[zipcode, setZipcode] = useState();
  const[mainDisplay, setMainDisplay] = useState(
    <LandingPage zipcode={zipcode} setZipcode={setZipcode} />
  );

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
      {mainDisplay}
      <footer className='container'>
        <h2>Copyright 2020</h2>
      </footer>
    </div>
  );
}

export default App;
