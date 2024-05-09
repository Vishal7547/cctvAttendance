import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";

function Analysisi() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = "http://127.0.0.1:5000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const totalPercentageOfAttendance = (userData?.length / 60) * 100;
  const absent = 100 - totalPercentageOfAttendance;
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
          <h4 className="text-success">Attendance [ECE]</h4>

          <div className="row">
            <div className="d-flex justify-content-center align-items-center">
              <div className="child text-center">
                <h1>Present</h1>
                <p>
                  <b>{Math.floor(totalPercentageOfAttendance)} %</b>
                </p>
              </div>
              <div className="child text-center">
                <h1>Absent</h1>
                <p>
                  <b>{Math.floor(absent)} %</b>
                </p>
              </div>

              <div className="child text-center">
                <h1>Total</h1>
                <p>
                  <b>100%</b>
                </p>
              </div>

              {/* <div className="child text-center">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysisi;
