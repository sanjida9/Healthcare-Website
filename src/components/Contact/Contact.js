import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import contact from "./../../assets/images/contact.jpg";

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
    <div className="p-5">
      <Container className="shadow-lg p-5">
        <div className="row" md={2}>
          <div className="col-md-6" md={2} sm={1}>
            <img className="img-fluid" src={contact} alt="" />
          </div>
          <div className="col-md-6 " md={2} sm={1}>
            <h2 className="text-center text-success fw-bold">Contact Us</h2>

            <h6 className="text-center text-success mb-4">
              You can easily reach us through filling up the form
            </h6>

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
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
