import React from "react";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";

function Attendence() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
      }}
      className="attendance"
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
          <div className="row bg-light my-2">
            <div className="row my-2">
              <div className="d-flex justify-content-between align-items-center">
                <h4>ECE</h4>
                <input
                  type="search"
                  placeholder="search.."
                  className="form-control w-25"
                />
              </div>
            </div>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Reg No</th>
                    <th scope="col">Date</th>

                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((s, i) => (
                    <>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td scope="col">Date</td>

                        <td scope="col">Time</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row bg-light my-2">
            <div className="row my-2">
              <div className="d-flex justify-content-between align-items-center">
                <h4>CIVIL</h4>
                <input
                  type="search"
                  placeholder="search.."
                  className="form-control w-25"
                />
              </div>
            </div>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Reg No</th>
                    <th scope="col">Date</th>

                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((s, i) => (
                    <>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td scope="col">Date</td>

                        <td scope="col">Time</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row bg-light my-2">
            <div className="row my-2">
              <div className="d-flex justify-content-between align-items-center">
                <h4>ME</h4>
                <input
                  type="search"
                  placeholder="search.."
                  className="form-control w-25"
                />
              </div>
            </div>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Reg No</th>
                    <th scope="col">Date</th>

                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((s, i) => (
                    <>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td scope="col">Date</td>

                        <td scope="col">Time</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row bg-light my-2">
            <div className="row my-2">
              <div className="d-flex justify-content-between align-items-center">
                <h4>CSE</h4>
                <input
                  type="search"
                  placeholder="search.."
                  className="form-control w-25"
                />
              </div>
            </div>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Reg No</th>
                    <th scope="col">Date</th>

                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((s, i) => (
                    <>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td scope="col">Date</td>

                        <td scope="col">Time</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row bg-light my-2">
            <div className="row my-2">
              <div className="d-flex justify-content-between align-items-center">
                <h4>EEE</h4>
                <input
                  type="search"
                  placeholder="search.."
                  className="form-control w-25"
                />
              </div>
            </div>
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Reg No</th>
                    <th scope="col">Date</th>

                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((s, i) => (
                    <>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td scope="col">Date</td>

                        <td scope="col">Time</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendence;
