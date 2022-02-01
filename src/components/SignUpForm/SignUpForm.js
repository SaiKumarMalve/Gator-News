import {React, useState} from 'react';
import {Row,Col,Form,Button,Spinner} from "react-bootstrap"
import {values,size} from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import "./SignUpForm.scss";
export default function SignUpForm(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(initialFormValue());
  const [signUpLoading, setSignUpLoading] = useState(false);
  const onSubmit = e => {
    e.preventDefault();

    let validCount = 0;
    values(formData).some(value => {
      value && validCount++;
      return null;
    });

    if (validCount !== 5) {
      toast.warning("Complete all the fields of the form");
    } 
    else {
      if (!isEmailValid(formData.email)) {
        toast.warning("Invalid Email");
      } else if (formData.password !== formData.confirmPassword) {
        toast.warning("Password must be same");
      } else if (size(formData.password) < 6) {
        toast.warning("Password must be 6 characters");
      }
      else{
        setSignUpLoading(true);
        toast.success("Form Completed Successfully")
      }
  }
  };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-up-form">
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={formData.name}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                defaultValue={formData.firstName}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email ID"
            name="email"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                defaultValue={formData.password}
              />
            </Col>
            <Col>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                defaultValue={formData.confirmPassword}
              />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          {!signUpLoading ? "Registrase" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
}