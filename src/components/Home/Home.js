import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Lower from "../Lower/Lower";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Container>
        <h1 className="fw-bold text-success text-center p-3">Our Services</h1>
        <Row md={3}>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
        <Lower></Lower>
      </Container>
    </div>
  );
};

export default Home;
