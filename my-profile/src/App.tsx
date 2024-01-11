import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Col, Row, Image } from 'react-bootstrap';
import ProfileImage from './assets/images/profile-image.jpg'

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Image className='w-100' src={ProfileImage} rounded />
          </Col>
          <Col xs={12} md={8} className='profile-details'>
            <div className='profile-name'>
              <h1>Charles França</h1>
            </div>
            <div className='profile-bradcrumb'>
             <h3>Backend Developer / Web Developer / Mobile Developer</h3>
            </div>
            <hr />
            <div className='profile-short-description'>
            Enthusiastically monetize magnetic resources via low-risk high-yield outsourcing. Enthusiastically implement backward-compatible supply chains through interactive users. <br /><br /> Quickly develop magnetic e-services and functional e-commerce. Enthusiastically monetize magnetic resources via low-risk high-yield outsourcing. Enthusiastically implement backward-compatible supply chains through interactive users. Quickly develop magnetic e-services and functional e-commerce...
            </div>
            <div className='action-buttons'>
              <a className="btn btn-primary system_btn quick_btn" data-toggle="modal" data-target="#more_details">Quick Profile View</a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
          <section>
            <h2>Bio Info</h2>
            <hr />
          </section>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} className='profile-details'>
            <div className='text-justify'>
              Assertively cultivate professional interfaces without synergistic etworks. Quickly erage existing customized ideas through client-based eliverables. Compellingly unleash fully tested outsourcing with prospective tunities. Uniquely maximize client-centric tals rather than focused web-readiness. Intrinsicly monetize reliable interfaces rather than multimedia based experiences. synergistic networks. Quickly rather than multimedia based Collaboratively synergize economically sound process improvements with functionalized e-commerce.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
