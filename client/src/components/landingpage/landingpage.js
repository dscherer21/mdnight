import React from "react";
import './landingpage.css';
//import { Container, Row, Col } from 'react-bootstrap';
//import { Link } from "react-router-dom";


const LandingPage = () => {
    return(
      <main className='container'>
          <div className='row'>
              <div className='col-sm-12'>
                <h2>Welcome to MDNight!</h2>
                <h3>The website that makes your date night more convenient.</h3>
                <p>
                  Let's assume that you and your "SO (aka Significant Other)" would like to go out for   a date night, however,
                  you have to continually switch back and forth between websites looking at showtimes and trying to find
                  a place to eat beforehand. Well, that's where MDNight comes in! We take your location, movie you're interested in seeing, , and show you theaters
                  that are showing your movie, and a list of restaurants nearby. Sound Convenient to you?Enter your info
                  below to get started!
                </p>
              </div>
          </div>
      </main>
    )
}


export default LandingPage;