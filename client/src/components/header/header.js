import React from "react";
import './header.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = () => {
    return(
      <Container className='header'>
        <Row>
          <Col id='hamburgermenu'>
            <Link to="#">
              <img className='hamburgermenu' src={require('./../../images/navbaricon.png')} alt='Hamburger Menu Icon'/>
            </Link>
          </Col>

          <Col>
            <h1>MDNight</h1>
          </Col>

          <Col>
            <p>Hello!</p>
          </Col>
        </Row>
      </Container>
    )
}


export default Header;