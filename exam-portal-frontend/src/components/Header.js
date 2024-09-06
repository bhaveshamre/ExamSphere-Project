import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaItalic } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
const logostyle = {
  color: "rgb(68 177 49)",
  size: "40px",
};
const Header = () => {
  const navigate = useNavigate();
  const loginReducer = useSelector((state) => state.loginReducer);
  const [isLoggedIn, setIsLoggedIn] = useState(loginReducer.loggedIn);
  let profilePageUrl = "";

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      setIsLoggedIn(true);
      loginReducer.user.roles.map((r) => {
        if (r["roleName"] === "ADMIN") {
          profilePageUrl = "/adminProfile";
        } else {
          profilePageUrl = "/";
        }
      });
    }
  }, [navigate]);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <span style={logostyle}>
              <i>
                <b>E</b>
              </i>
            </span>
            xam
            <span style={logostyle}>
              <i>
                <b>S</b>
              </i>
            </span>
            phere
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {isLoggedIn ? (
                <Nav.Link>{loginReducer.user.firstName}</Nav.Link>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link></Nav.Link>
                  </LinkContainer>
                </>
              )}

              {isLoggedIn ? (
                <LinkContainer to="/">
                  <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                </LinkContainer>
              ) : (
                <>
                  <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contactus">
                    <Nav.Link>Contact Us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Sign in</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
