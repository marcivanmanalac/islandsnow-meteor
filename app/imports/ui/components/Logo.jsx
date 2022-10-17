import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
const Logo = () => (
  <Row className="justify-content-md-center py-3">
    <Col md="auto">
      <Image
        fluid
        rounded
        mx="auto"
        d="block"
        src="https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/experience-islandsnow-bootstrap-logo.png"
        alt="Island Snow Logo"
      />
    </Col>
  </Row>
);

export default Logo;
