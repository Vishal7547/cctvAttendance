import React from "react";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";

function Analysisi() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
      }}
    >
      <Sidebar />
      {/* <Navbar expand="lg" className="head-div">
        <Container style={{ marginRight: "05px", marginLeft: "05px" }} fluid>
          <Navbar.Brand href="#">
            <img
              src={logo}
              style={{ height: "50px", width: "100px" }}
              class="svg"
              alt="Google Developer Student Clubs logo"
            />
          </Navbar.Brand>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
        </Container>
      </Navbar> */}

      <div className="parents">
        <div className="container">
          <h4 className="text-success">Attendance</h4>
          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="child text-center">
                <h1>ECE</h1>
                <p>
                  <b>90%</b>
                </p>
              </div>
              <div className="child text-center">
                <h1>CIVIL</h1>
                <p>
                  <b>90%</b>
                </p>
              </div>

              <div className="child text-center">
                <h1>ME</h1>
                <p>
                  <b>90%</b>
                </p>
              </div>

              <div className="child text-center">
                <h1>EEE</h1>
                <p>
                  <b>90%</b>
                </p>
              </div>
              <div className="child text-center">
                <h1>CSE</h1>
                <p>
                  <b>90%</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysisi;
