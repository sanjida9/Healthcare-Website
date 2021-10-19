import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};
const formStyle = { background: "transparent", color: "white" };
function ContactForm() {
  return (
    <div style={{ padding: "58px 0 40px" }}>
      <div>
        <Container className="shadow-lg p-5">
          <h2 className="text-center text-success">Contact Us</h2>

          <p className="text-center text-success mb-4">
            You can easily reach us through filling up the form
          </p>
          <Form>
            <Row>
              <Col sm>
                <Form.Group
                  className="mb-3 text-white"
                  controlId="formBasicText"
                >
                  <Form.Label className="text-success">
                    <h6>Name</h6>{" "}
                  </Form.Label>
                  <Form.Control
                    style={formStyle}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group
                  className="mb-3 text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="text-success">
                    <h6>Email</h6>{" "}
                  </Form.Label>
                  <Form.Control
                    style={formStyle}
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Label className="text-success">
              <h6>Topic</h6>{" "}
            </Form.Label>
            <Form.Control
              style={formStyle}
              className="my-2"
              type="text"
              placeholder="Write Your Subject..."
            />
            <Form.Group
              className="mb-3 text-white"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-success">
                <h6>Your Message</h6>{" "}
              </Form.Label>
              <Form.Control
                style={formStyle}
                placeholder="Write you message..."
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <div className="text-center">
              <Button className="mb-5 px-5" variant="success" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
