import React ,{ useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Contactpage from '../../Pages/ContactPage/Contactpage';
import {FaArrowRight} from "react-icons/fa"




const NavBar = () =>{
  const toggleShow = () => setShow((s) => !s);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <Navbar bg="transparent" expand="lg" className='text-light '>
      <Container fluid>
        <Navbar.Brand href="/" className='text-light text-uppercase ms-5'>Partho.info</Navbar.Brand>
        <Navbar.Toggle  bg="light" className='toggle' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-lg-auto ms-5 me-3 my-3 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            {/* <Nav.Link  ><Link to='/about'className='text-light me-3 text-uppercase' >About us</Link></Nav.Link> */}
            {/* <Nav.Link  ><Link to='/blog' className='text-light me-3 text-uppercase' >Blog</Link> </Nav.Link> */}

          </Nav>

          <>
            {/* <Button variant="primary" onClick={toggleShow} className='btn me-5'>Contact Us</Button> */}

            <Offcanvas show={show} onHide={handleClose} scroll='true' 
              backdrop='true' placement='end'className='offcanvas text-light'>
              <Offcanvas.Header >
                <div className='closeButton' onClick={toggleShow}>
                  <FaArrowRight className='arrow'/>
                </div>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
               <Contactpage/>
              </Offcanvas.Body>
            </Offcanvas>
        </>
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
  );
}


export default NavBar;