import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
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
        <h1 className="font-bold text-center p-5">Our Services</h1>
        <Row md={3}>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </Container>
      <h1>Another part 1</h1>
      <h1>Another part 2</h1>
      <h1>Another part 3</h1>
    </div>
  );
};

export default Home;
