import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-light">
    <Container>
      <Navbar.Brand href="#home">
      <i className="fa-solid fa-music" beat style={{color: "#fe0101",}} />       
        React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>

  )
}

export default Header