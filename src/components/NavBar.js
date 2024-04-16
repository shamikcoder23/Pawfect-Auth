import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  let c = 0;

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h2 className="portfolio">Pawfect Connections</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Pets
              </Nav.Link>
              {isAuthenticated ? (
                <Nav.Link
                  href="#connect"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                >                
                  Kennel Size : {c}
              </Nav.Link>
              ) : (
                <Nav.Link
                  href="#connect"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                  >                
                    Connect With Us
                </Nav.Link>
              )}           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
