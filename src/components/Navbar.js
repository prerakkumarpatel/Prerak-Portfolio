import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Nav className={"fixedleft"} className="ms-auto" defaultActiveKey="#home">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" onClick={() => updateExpanded(false)}>
          <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/about"
          onClick={() => updateExpanded(false)}
        >
          <AiOutlineUser style={{ marginBottom: "2px" }} /> About
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/project"
          onClick={() => updateExpanded(false)}
        >
          <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />
          Projects
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/resume"
          onClick={() => updateExpanded(false)}
        >
          <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
