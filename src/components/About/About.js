import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import about from "./../../assets/images/about.jpg";
import about2 from "./../../assets/images/about2.jpg";

const About = () => {
  return (
    <div className="py-5">
      <Container>
        <h2 className="text-center text-success mb-4 fw-bold p-4">
          WELCOME TO OPTIC CARE HOSPITAL
        </h2>

        <Row>
          <Col md className="pe-3">
            <img className="img-fluid p-2" src={about} alt="" />
          </Col>
          <Col>
            <h3 className="text-success fw-bold pt-5">Our Vision</h3>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> Performing all
              operations and procedures at the highest professional level using
              the most modern methods.
            </h6>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> Drawing up an
              individual treatment program for each patient.
            </h6>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> Compliance of
              materials and equipment with international standards, the
              availability of all necessary certificates and permits.
            </h6>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> Thinking about what
              our patients value can help us to optimise patient flow.
            </h6>
            <h6 className="text-success pb-5">
              <i class="fas fa-chevron-circle-right"></i> Generally
              speaking,patients value everything that provides them with a good
              outcome
            </h6>
          </Col>
        </Row>

        <Row>
          <Col md className="pe-3">
            <img className="img-fluid p-2" src={about2} alt="" />
          </Col>
          <Col md className="pe-3">
            <h3 className="text-success fw-bold pt-5">Our Mission</h3>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> It is therefore very
              helpful to look at our eye service as a whole from time to time
            </h6>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> we have received
              negative feedback from our patients
            </h6>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> We must examine
              everything we do: from the moment of first contact with our
              patients to the time they are finally discharged after a
              successful follow-up examination.
            </h6>
            <h6 className="text-success">
              <i class="fas fa-chevron-circle-right"></i> The good news isthat,
              by thinking about our patients and how to provide them with a good
              experience in our clinic
            </h6>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <h5 className="text-success">Sign up for our monthly newsletter</h5>
            <p className="text-success">
              Be the first to know about news and updates.We never share you
              mail with others. Trust us!
            </p>
          </Col>
          <Col md className="d-flex align-items-center">
            <Form className="w-100">
              <Form.Label className="text-success">
                <h6>Leave your mail below</h6>
              </Form.Label>
              <Form.Group
                className="d-flex text-success"
                controlId="formBasicEmail"
              >
                <Form.Control
                  style={{ background: "transparent", color: "white" }}
                  className="py-2 rounded-0"
                  type="email"
                  placeholder="Enter email"
                />
                <button
                  style={{ width: "120px" }}
                  className="btn rounded-0 btn-success"
                >
                  SIGN UP
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
