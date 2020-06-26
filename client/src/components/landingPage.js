import React from 'react';

function LandingPage(props) {

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
            <label htmlFor='zipcode'>Please Enter Your zipcode to get started!</label>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <input name='zipcode' type="text" pattern="[0-9]{5}" placeholder='ex. 12345' onChange={(e) => props.setZipcode(e.target.value)} value={props.zipcode} />
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