// react hooks :)
import React, { useState } from 'react';

// import components of bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import icons 
import FacebookIcon from '../icons/facebookIcon.jsx';
import InstagramItem from '../icons/InstagramIcon.jsx';
import CartIcon from  '../icons/cartIcon.jsx';
import UserIcon from '../icons/userIcon.jsx';
import { Link, NavLink } from "react-router-dom"


// import components

import SessionModal from './sessionModal.jsx';


function MainNavBar() {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
 const handleClose = () =>setShow(false);

  return (  
  <>

   <Navbar  className="p-4 cla navbar_container  "  expand="md">
   <Navbar className='r'>
    <Container  className="navbar_nav" fluid>
      <Nav   className=" ms-auto gap-3 ">
      <Nav.Item> <FacebookIcon/></Nav.Item>
        <Nav.Item> <InstagramItem/></Nav.Item>
      
        <hr className="text-black-50" />
    </Nav>
    </Container>
  </Navbar>
    <Container className="d-flex navbar_nav  justify-content-between mx-auto" fluid>
      <Navbar.Brand className="" >  <h4>Sinestesia store</h4></Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='text-center' id="basic-navbar-nav">
      <Nav className=" mx-auto  cont_navbar d-flex justify-content-center">
        <Link to='/' >INICIO</Link>
        <Link to='/contacto' >NOSOTROS</Link>
        <Link to='/about' >CONTACTO</Link>
        <Link to='/about' >PRODUCTOS  </Link>
      </Nav>

      <hr className="text-black-50" />
      <Nav className="gap-2">

      <Nav.Link>CARRITO</Nav.Link>
        <Nav.Link onClick={()=>{handleShow()}}>CUENTA</Nav.Link>
      </Nav>
      
      </Navbar.Collapse>

    </Container>
    </Navbar>   
    <SessionModal handleShow={handleShow} handleClose={handleClose} show={show}/>
  </>
 )}
  
  export default MainNavBar;