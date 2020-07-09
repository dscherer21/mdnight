import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LandingPage(props) {
  const { setZipcode, zipcode } = props;

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
      console.log(response.data.zipCode);
      setZipcode(response.data.zipCode);
    })
    .catch((error)=>{
      console.log(error)
    });
  }, [setZipcode]);

  function handleInputChange(e) {
    //sanitze inputs
    setZipcode(e.target.value);
  };

  useEffect(() => {
    console.log(zipcode);
  }, [zipcode]);

  return (
      <main className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Welcome to <span>MDNight</span>!</h1>
            <h2>The website that makes your date night more convenient.</h2>
            <p>Let's assume that you and your "Significant Other" would like to go out for a date night, however, you have to continually switch back and forth between websites looking at showtimes and trying to find a place to eat beforehand. Well, that's where <span>MDNight</span> comes in! We take your location, movie you're interested in seeing, , and show you theaters that are showing your movie, and a list of restaurants nearby. Sound Convenient to you? Enter your info below to get started!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <label htmlFor='zipcodeInput'>Please Enter Your zipcode to get started!</label>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <input name='zipcodeInput' type="text" defaultValue={zipcode} onChange={handleInputChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button className='btn btn-primary'>Get Started!</button>
          </div>
        </div>
      </main>
  );
}

export default LandingPage;