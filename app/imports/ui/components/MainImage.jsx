import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

const MainImage = () => (
  <Row className="justify-content-md-center pt-3">
    <Col md="auto">
      <Image fluid src="https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png" />
    </Col>
  </Row>
);

export default MainImage;
