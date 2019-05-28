import React from "react";
import './header.css';
//import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = () => {
    return(
      <header className='container header'>
        <div className='row'>
          <div className='col-sm-4'>
            <Link to="#">
              <img className='hamburgermenu' src={require('./../../images/navbaricon.png')} alt='Hamburger Menu Icon'/>
            </Link>
          </div>

          <div className='col-sm-4'>
            <h1>MDNight</h1>
          </div>

          <div className='col-sm-4'>
            <p>Hello!</p>
          </div>
        </div>
      </header>
    )
}


export default Header;