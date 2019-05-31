import React from "react";
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
//import { Link } from "react-router-dom";


const Footer = () => {
  return(
    <Container id='footer'>
      <Row>
        <Col>
          <p>Copyright 2019</p>
        </Col>
      </Row>
    </Container>
  )
}


export default Footer;