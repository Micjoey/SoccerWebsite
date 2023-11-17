import React from "react";
import { Nav } from "react-bootstrap";

const ContactLink = () => {
  const emailAddress = "jsavett+websitesupport@gmail.com";
  const emailSubject = "Website Support Inquiry";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject,
  )}`;

  return <Nav.Link href={mailtoLink}>Contact</Nav.Link>;
};

export default ContactLink;
