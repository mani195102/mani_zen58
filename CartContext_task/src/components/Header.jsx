import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Firstimage from '../assets/cosmetics.jpg';
import secondtimage from '../assets/girl.jpg';
import thirdtimage from '../assets/shop.jpg'
import './Header.css'

const Header = ({cart}) => {
  return (
    <div className="shop-header">
        <div className="shop-side">
            <div className="container">
                    <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand as={Link} to={"/"}>Shopway</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
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

    <header className="pb-5">
    <Carousel>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={secondtimage}
      alt="Third slide"
    />
        <Carousel.Caption>
          <h3>Happy Shopping</h3>
          <p>Purschase too many products in Shop Cart with Exclusive Offers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={thirdtimage}
      alt="Third slide"
    />
        <Carousel.Caption>
          <h3>New Collections</h3>
          <p>Purschase too many products in Shop Cart with Exclusive Offers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
      className="d-block w-100"
      src={Firstimage}
      alt="Third slide"
    />
        <Carousel.Caption>
          <h3>Premium Wear</h3>
          <p>
          Purschase too many products in Shop Cart with Exclusive Offers </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </header>
    </div>
  )
}

export default Header