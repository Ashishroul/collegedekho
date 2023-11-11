import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Footer from './footer';
function NavbarCompo() {
  return (
    <>
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home"><img src="https://collegedakhla.com/wp-content/uploads/elementor/thumbs/COLLEGE-WHITE-q2iwfvul0ru9epmp8zzy5u1mf8fq043d9u8xksyfpc.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" as={Link} to={'/'}><div className='listItem'>HOME</div></Nav.Link>
            <Nav.Link href="#link" as={Link} to={'/admission'}><div className='listItem'>ADMISSION</div></Nav.Link>
            <Nav.Link href="#link" as={Link} to={'/about'}><div className='listItem'>ABOUT US</div></Nav.Link>
            <Nav.Link href="#link" ><div className='listItem'>COURSES</div></Nav.Link>
            <Nav.Link href="#link" ><div className='listItem'>MBBS</div></Nav.Link>
            <Nav.Link href="#link" ><div className='listItem'>CONTACT US</div></Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <button className='btn btn-success'>CALL +919899880100</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarCompo;