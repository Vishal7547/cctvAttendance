import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Logo.png'


function Header() {
  return (
    <Navbar expand="lg" >
      <Container style={{ marginRight: '05px', marginLeft:'05px' }} fluid>
        <Navbar.Brand href="#"><img src={logo} style={{ height: '50px', width:'100px' }} class="svg" alt="Google Developer Student Clubs logo"/></Navbar.Brand>
    
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Button href='/profile' variant="outline-info">Login</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default Header;