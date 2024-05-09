import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = "http://127.0.0.1:5000/api/UserDetails";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Filter unique registration numbers
        const uniqueRegistrationNumbers = new Set();
        const filteredData = data.filter((item) => {
          if (uniqueRegistrationNumbers.has(item.regno)) {
            return false; // Skip this item if registration number is not unique
          }
          uniqueRegistrationNumbers.add(item.regno);
          return true; // Include this item if registration number is unique
        });

        setUserData(filteredData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

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

      <div className="container-fluid">
        <div className="row my-5">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-success">All Students</h4>
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
              </tr>
            </thead>
            <tbody>
              {userData?.map((s, i) => (
                <>
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{s?.name}</td>
                    <td>{s?.regno}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
