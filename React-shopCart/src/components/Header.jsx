import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = ({cart}) => {
  return (
    <div className="shop-header">
        <div className="shop-side">
            <div className="container">
                    <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>Zen Cart</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/"}>All Products</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/"}>
                                Popular Items
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={"/"}>New Arrivals</NavDropdown.Item>
                           </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
                    <form className="d-flex align-items-center">
                    <Link to={"/Cart"}>
                        <button className="btn btn-outline-dark" type="submit">
                          <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{ cart.length }</span> 
                        </button></Link>
                    </form>
                </div>
            </div>

    <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Welcome to Zen Cart !!!</h1>
                    <p className="lead fw-normal text-white-50 mb-0">Purschase too many products in Shop Cart with Exclusive Offers </p>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header