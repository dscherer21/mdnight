import React from "react";
import './header.css';
import { Container, Row, Col } from 'react-bootstrap';
//import { Link } from "react-router-dom";


const Header = () => {
    return(
      <Container>
          <Row>
              <Col>
                <p>Hello!</p>
              </Col>
          </Row>
      </Container>
    )
}


export default Header;