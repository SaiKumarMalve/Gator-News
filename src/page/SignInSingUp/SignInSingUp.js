import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch,faUsers,faComment} from "@fortawesome/free-solid-svg-icons";
import "./SignInSingUp.scss";
import LeftComponentBg from "../../assets/png/logo.png";
export default function SignInSingUp() {
  return (
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent />
        </Row>
      </Container>

  );
}
function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <div>
      <h2>
          <FontAwesomeIcon icon={faSearch} />
          Connect with Gators.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Community to share your thoughts.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Get to know your Co-Gators.
        </h2>
      </div>
      
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin-signup__right" xs="6">
      <h2>Right Component ...</h2>
    </Col>
  );
}
