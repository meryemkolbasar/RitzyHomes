import React from "react";
import { Nav } from "react-bootstrap";
import { config } from "../../helpers/config";
import {
  FaPhone,
  FaEnvelope,
  FaAddressCard,
} from "react-icons/fa";
const ContactMenu = (props) => {
  return (
    <Nav {...props}>
      <Nav.Link href={`tel:${config.contact.phone}`}>
        <FaPhone /> {config.contact.phone}
      </Nav.Link>
      <Nav.Link href={`mail:${config.contact.email}`}>
        <FaEnvelope /> {config.contact.email}
      </Nav.Link>
      <Nav.Link href={config.contact.address}>
        <FaAddressCard /> {config.contact.address}
      </Nav.Link>
      
    </Nav>
  );
};
export default ContactMenu;
