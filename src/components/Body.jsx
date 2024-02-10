import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container className="pt-2 pb-2" style={{marginRight:'0px', marginLeft: '0px'}}>
      <Container className="max-content-wrapper">
        <Container className="max-content-wrapper">
          <Container className="max-content-wrapper">
            <Container className="max-content-wrapper">
              <Row className="justify-content-start">
                <Col>
                  <Image
                    src="https://rocketflow.in/resources/blog/images/attendance-leave-banner.jpeg
                    "
                    alt="Logo"
                    style={{
        borderRadius: '12px',
        height: 'auto',
        width: '100%',
        boxShadow: '6px 6px 4px 0em rgba(0,0,0,0)'
      }} 
                    fluid
                  />
                </Col>
              </Row>
              <Row className="justify-content-start">
                <Col className="text-start mt-4">
                  <h1>Purnea College of Engineering - Purnea</h1>
                </Col>
              </Row>
              <Row className="justify-content-start mt-2">
                <Col className="text-start">
                  <p>66 Group Members</p>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default MyComponent;
