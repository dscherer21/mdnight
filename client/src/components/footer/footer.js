import React from "react";
import './footer.css';
//import { Container, Row, Col } from 'react-bootstrap';
//import { Link } from "react-router-dom";


const Footer = () => {
    return(
      <footer className='container' id='footer'>
          <div className='row'>
              <div className='col-sm-12'>
                <p>Copyright 2019</p>
              </div>
          </div>
      </footer>
    )
}


export default Footer;