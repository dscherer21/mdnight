import React from "react";
import './footer.css';
import { Navbar, Row, Col } from 'react-bootstrap';
//import { Link } from "react-router-dom";


const Footer = () => {
    return(
      <Navbar className='container' id='footer' fixed='bottom'>
          <Row>
              <Col>
                <p>Hello!</p>
              </Col>
          </Row>
      </Navbar>
    )
}


export default Footer;