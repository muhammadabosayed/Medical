import React from "react";
import {Container,Nav,NavDropdown,Navbar} from "react-bootstrap"
import "./Header.css"
import logo from "../../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhoneVolume, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = ()=>{
  return(
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" className="active">Home</Nav.Link>
        
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/OurTeam">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="/Booking">Booking</NavDropdown.Item>
                <NavDropdown.Item href="/NotFound">Erorr 404</NavDropdown.Item>
                <NavDropdown.Item href="/login">Login / Register</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Services">Service</Nav.Link>
              <Nav.Link href="/Blogs">Blogs</Nav.Link>

        

              <Nav.Link href="/Contact">Contact Us</Nav.Link>
              <Nav.Link href=""> <FontAwesomeIcon icon={faSearch} /></Nav.Link>
              <Nav.Link href=""><FontAwesomeIcon icon={faPhoneVolume} />  01158242102</Nav.Link>
              
          
          
        
          </Nav>
          <Nav.Link href="/Contact">
              <button className="btn-contact">Contact Us</button>
            </Nav.Link>
        </Navbar.Collapse>
        
      </Container>
      
  </Navbar>
  )
}
export default Header;





