import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
function Header({ setAuth, setIsAuthenticated, isAuthenticated }) {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // console.log(result.user);
      setIsAuthenticated(true);
      setAuth(result?.user);
      return navigate("/profile");
    } catch (e) {
      setIsAuthenticated(false);

      console.log(e);
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        setAuth({});
        return navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setIsAuthenticated(true);
      });
  };
  return (
    <Navbar expand="lg">
      <Container style={{ marginRight: "05px", marginLeft: "05px" }} fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            style={{ height: "50px", width: "100px" }}
            // class="svg"
            alt="Google Developer Student Clubs logo"
          />
        </Navbar.Brand>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <Form className="d-flex">
          <Button
            variant="outline-info"
            onClick={(e) => {
              isAuthenticated ? handleLogout(e) : handleLogin(e);
            }}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
