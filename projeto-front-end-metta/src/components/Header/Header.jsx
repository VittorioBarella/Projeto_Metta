import React from 'react';
import '../Header/style.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Vittório Andrade</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />

      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Página Inicial</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/sobre'>
            <Nav.Link>Sobre</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/contato'>
            <Nav.Link>Contato</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
