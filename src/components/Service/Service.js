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
            <Card.Title className="fw-bold text-success text-center">
              {service_name}
            </Card.Title>
            <Card.Text className="text-success text-center">
              {description}
            </Card.Text>
            <div className="text-center">
              <Link to={`/bookService/${id}`}>
                <Button className="btn-success px-5 btnHover">
                  See Details
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
