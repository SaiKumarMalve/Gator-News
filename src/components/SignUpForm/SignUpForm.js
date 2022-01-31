import React from 'react';
import {Row,Col,Form,Button,Spinner} from "react-bootstrap"
import "./SignUpForm.scss";
export default function SignUpForm(props) {
  const{ setShowModal}=props;
  const onSubmit=e=>{
    e.preventDefault();
    setShowModal(false);
  };


  return (<div className='sign-up-form'>
    <h2>SignUpForm</h2>
    <Form onSubmit={onSubmit}>
    <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="First Name"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email Id"
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
              />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
           Register
        </Button>
        </Form>
        </div>
  );
}
