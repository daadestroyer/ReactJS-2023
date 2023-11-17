import React from "react";
import { Form } from "react-router-dom";
import { Button, Container, FormGroup, Input } from "reactstrap";

export default function Contacts() {
  return (
    <>
     <h1 className='text-center my-3'>Reach out to us </h1>
      <div className="container my-3">
        <FormGroup>
          <b>
            <label>Email:</label>
          </b>
          <Input
            type="email"
            placeholder="Enter email"
            name="userEmail"
            id="userEmail"
          ></Input>
        </FormGroup>
        <FormGroup>
          <b>
            <label>Message:</label>
          </b>
          <Input
            type="textarea"
            placeholder="Enter message"
            name="userMessage"
            id="userMessage"
          ></Input>
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Send Message</Button>
        </Container>
      </div>
    </>
  );
}
