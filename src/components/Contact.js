import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <Container id="contact" className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh', marginTop: '50px' }}>
      <div className="w-50">
        <h1 style={{textAlign:"center"}}>Contact Us</h1>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;