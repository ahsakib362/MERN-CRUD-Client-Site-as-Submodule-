import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../Assets/img/crudLogo.png";


function AppNavBar() {
  return (
    <div>
        <Navbar className='Navigation' bg="light" expand="lg">
            <Container>
                <Navbar.Brand ><img class="logo" src={logo} alt="logoImage" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link ><NavLink class="MenuItemName text-decoration-none " to="/">Product List</NavLink></Nav.Link>
                    <Nav.Link ><NavLink class="MenuItemName text-decoration-none " to="/CreateProduct">Create Product</NavLink></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default AppNavBar