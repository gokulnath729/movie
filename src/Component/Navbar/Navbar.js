import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
class Navb extends React.Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" className="navBar">
          <Navbar.Brand href="#home">
            <i className="fab fa-google  fa-2x" />
          </Navbar.Brand>
          <div className="d-flex ml-auto">
            <input type="text" placeholder="Search" className="search" />
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Browse Movies</Nav.Link>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Navb;
