import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Contact() {
  return (
    <div>
      <Form>
        <Row form >
          <Col md={4}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Your name" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Your email" />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea" name="message" id="message" placeholder="Write your message here" />
        </FormGroup>

        <Button>Sent</Button>
      </Form>
    </div>
  )
}

export default Contact
