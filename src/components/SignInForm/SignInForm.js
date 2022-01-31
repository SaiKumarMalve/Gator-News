import React from 'react';
import {Form,Button,Spinner} from "react-bootstrap"
import "./SignInForm.scss";
export default function SignUpForm() {
    const onSubmit=e=>{
        e.preventDefault();
        console.log("Login ..");
    };
  return (
      <div className="sign-in-form">
          <h2>Enter Details</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group> 
                <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
            <Form.Group> 
                <Form.Control type="password" placeholder="Enter Password"/>
            </Form.Group>
            <Button variant="primary" type="submit">Login to Gator News </Button>
        </Form>
      </div>
  )
  };

