import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch,faUsers,faComment} from "@fortawesome/free-solid-svg-icons";
import "./SignInSingUp.scss";
import UFLogo from "../../assets/png/main-logo.png";
import Lottie from 'lottie-react-web'
import animation from "../../assets/png/animation.json"

import BasicModal from "../../components/Modal/BasicModal";
import GatorLogo from "../../assets/png/logo-white.png";

const App = () => (
  <Lottie
    options={{
      animationData: animation
      
    }}
  />
)

export default function SignInSingUp() {
  return (
    <div>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent />
        </Row>
      </Container>
      <BasicModal/>
      </div>

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
      <div class="rightPane">
      <div class="LogoImage">
      <img src={GatorLogo} alt="GatorLogo"/>
      </div>
      <div class="content">
      
      <h2>Welcome to Gator News!!</h2>
      <Button variant="primary">Register Gator</Button>
      <Button variant="primary">Log In</Button>
      </div>
      </div>
    </Col>
  );
}
