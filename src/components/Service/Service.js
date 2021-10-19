import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { service_name, service_image, id, description } = props.service;

  return (
    <div>
      <Col className="my-3">
        <Card className="border-0 shadow hover-card">
          <Card.Img
            className="img-fluid p-2 "
            variant="top"
            src={service_image}
          />
          <Card.Body>
            <Card.Title>{service_name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/bookService/${id}`}>
              <Button className="btn-success px-5 mx-5">Book Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
