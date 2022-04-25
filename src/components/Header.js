import {Navbar,Nav,Container}from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>Expense Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <Link to="/history">History of Transactions</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header