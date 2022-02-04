import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./TweetModal.scss"
import classNames from "classnames";
import { Camera } from "../../../utils/Icons";
export default function TweetModal(props) {
    const { show, setShow } = props;
    const [message, setMessage] = useState("");
    const maxLength=280;
    const onSubmit = () => {
        console.log("hi")
    }
  return (
    <Modal
      className="tweet-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
        <Modal.Header>
        <Modal.Title>
          <Camera onClick={() => setShow(false)} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={onSubmit}>
          <Form.Control
            as="textarea"
            rows="6"
            placeholder="Whats Happening Gator?"
            onChange={(e) =>{
                e.preventDefault(); 
                setMessage(e.target.value);
                console.log(message);
            }
        }
          />
          <span
            className={classNames("count", {
              error: message.length > maxLength,
            })}
          >
            {message.length}
          </span>
          <Button
            type="submit"
            disabled={message.length > maxLength || message.length < 1}
          >
              Buzz
              </Button>
          </Form>
          </Modal.Body>
    </Modal>
  );
}
