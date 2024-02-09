import React from 'react'
import Sidebar from './Sidebar'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Dashboard() {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'start'
    }}>
            <Sidebar/>
            <Navbar expand="lg" >
      <Container style={{ marginRight: '05px', marginLeft:'05px' }} fluid>
        <Navbar.Brand href="#"><img src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_horizontal_097s7oa.svg" style={{ height: '50px', width:'200px' }} class="svg" alt="Google Developer Student Clubs logo"/></Navbar.Brand>
    
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Dashboard