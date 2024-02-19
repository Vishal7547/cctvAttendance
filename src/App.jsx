import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Editpage from "./components/Editpage";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { auth as authenticate } from "../firebase";

function App() {
  return (
    <div className="Mainpage">
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

function MainContent() {
  const location = useLocation();
  const [auth, setAuth] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("auth", auth);

  useEffect(() => {
    onAuthStateChanged(authenticate, (user) => {
      if (user) {
        console.log(user, "user1");
        setIsAuthenticated(true);
        setAuth(user);
      } else {
        setIsAuthenticated(false);
        console.log("error");
      }
    });
  }, [auth]);
  // Function to determine whether to render the Header or not
  const renderHeader = () => {
    // Check if the current route is not '/dashboard'
    if (location.pathname !== "/dashboard") {
      return (
        <Header
          setAuth={setAuth}
          setIsAuthenticated={setIsAuthenticated}
          isAuthenticated={isAuthenticated}
        />
      );
    }
    return null; // Don't render anything if the route is '/dashboard'
  };

  return (
    <>
      {/* Render Header conditionally */}
      {renderHeader()}
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/profile"
          element={
            <Profile auth={auth} setIsAuthenticated={setIsAuthenticated} />
          }
        />
        <Route exact path="/edit" element={<Editpage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
