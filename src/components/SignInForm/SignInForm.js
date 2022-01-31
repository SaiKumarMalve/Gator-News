import React, {useState} from 'react';
import {Form,Button} from "react-bootstrap"
import "./SignInForm.scss";

export default function SignInForm() {
    const[formData,setFormData]=useState(initialFormValue());
    const onSubmit=e=>{
        e.preventDefault();
        console.log(formData);
    };


    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    return (
        <div className="sign-in-form">
          <h2>Gator Details</h2>
          <Form onSubmit={onSubmit} onChange={onChange}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email Address"
                defaultValue={formData.email}
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                defaultValue={formData.password}
                name="password"
                placeholder="Password"
                
              />
            </Form.Group>
            <Button variant="primary" type="submit">Login to Gator News </Button>
          </Form>
        </div>
      );
    }
  
  

  function initialFormValue() {
      return{
          email: "ktejaswini@gmail.com",
          password: "123"
      };
  }
