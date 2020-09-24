import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../image/logo2.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const addProduct = props.addProduct;
    return (
        <Navbar bg="white" expand="lg">
           <Link to="/home"> <Navbar.Brand><img className="logo ml-4" src={logo} alt="" /></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Link to="/shipment" className="nav-item ml-4 text-decoration-none"><FontAwesomeIcon icon={faShoppingCart} /><sup> {addProduct.length} </sup></Link>
                    <Link to="/login" className="nav-item ml-4 text-decoration-none">Login</Link>
                    <Link to="/login" className="sign-up ml-4 text-decoration-none">Sign up</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;