import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";

const SignUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    // to do : stop page from refreshing
    // call a function to sign up

    setIsOpen(false);
  };

  return (
    <div>
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign Up
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {
              //place your inputs here
            }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default SignUpModal;
