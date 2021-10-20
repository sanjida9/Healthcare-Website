import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import why from "./../../assets/images/why.jpg";

const Lower = () => {
  return (
    <Container>
      <h2 className="text-center p-5 text-success fw-bold">
        <i>Optic Care in Number</i>
      </h2>
      <Row className="p-3">
        <Col className="m-1">
          <div className="card hover-card border-success  text-center text-success">
            <div>
              <h1>
                <i className="fas fa-procedures"></i>
              </h1>
            </div>
            <div className="card-body">
              <h1 className="card-title">80,000</h1>
              <h6 className="card-text">PATIENTS</h6>
            </div>
          </div>
        </Col>
        <Col className="m-1">
          <div className="card hover-card border-success  text-center text-success">
            <div>
              <h1>
                <i className="fas fa-user-md"></i>
              </h1>
            </div>
            <div className="card-body">
              <h1 className="card-title">50</h1>
              <h6 className="card-text">Doctors</h6>
            </div>
          </div>
        </Col>
        <Col className="m-1">
          <div className="card hover-card border-success text-center  text-success">
            <div>
              <h1>
                <i className="fas fa-calendar-alt"></i>
              </h1>
            </div>
            <div className="card-body">
              <h1 className="card-title">12</h1>
              <h6 className="card-text">BRANCHES</h6>
            </div>
          </div>
        </Col>
      </Row>
      <h2 className="text-center text-success fw-bold p-3">
        <i>Why Optic Care</i>
      </h2>
      <Row md={2} xs={1}>
        <Col className="p-5 text-success">
          <h3>Top eye doctor USA | Affordable & Best eye hospital USA</h3>
          <hr />
          <h6>
            <i className="fas fa-arrow-circle-right"></i> Online consultation
            for USA patients with super-specialist eye doctors at $49
          </h6>
          <h6>
            <i className="fas fa-arrow-circle-right"></i> Affordable yet best
            treatment from top rated Indian doctors
          </h6>
          <h6>
            <i className="fas fa-arrow-circle-right"></i> Treatment for all eye
            diseases including cataract, squint, glaucoma & Specs removal at
            partner USA eye hospitals or in India
          </h6>
          <h6>
            <i className="fas fa-arrow-circle-right"></i> Eye surgeries for USA
            patients in world-class facilities in India at 1/10th cost
          </h6>
        </Col>
        <Col className="p-5">
          <img className="img-fluid" src={why} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Lower;
