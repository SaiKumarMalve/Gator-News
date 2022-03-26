import React, { useState, useCallback } from "react";
import { Form, Button, Row, Col, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";


import "./EditUserForm.scss";

export default function EditUserForm(props) {
  

  const onSubmit = e => {
    e.preventDefault();   
    console.log("Editing User....");
  };

  return (
    <div className="edit-user-form">

      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Name" name="name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Last Name" name="lastName" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Add your biography"
            type="text"
            name="biography"
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Website"
            name="website"
          />
        </Form.Group>

        <Form.Group>
          <DatePicker
            placeholder="Date of birth"
            locale={"en"}
            selected={new Date()}
            
          />
        </Form.Group>

        <Button className="btn-submit" variant="primary" type="submit">
         Update
        </Button>
      </Form>
    </div>
  );
}
