import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineAliwangwang,
  AiOutlineHome,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { LuTableProperties } from "react-icons/lu";
import { MdPrivacyTip } from "react-icons/md";

const Menu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link as={Link} to="/">
        <AiOutlineHome/> Home
      </Nav.Link>
      <Nav.Link as={Link} to="/properties">
      <LuTableProperties /> Properties
      </Nav.Link>
      <Nav.Link as={Link} to="/about">
       <AiOutlineInfoCircle/> About
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
       <AiOutlineAliwangwang/> Contact
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
      <MdPrivacyTip /> Privacy Policy 
      </Nav.Link>
    </Nav>
  );
};

export default Menu;
