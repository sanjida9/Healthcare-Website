import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Bg from "../../../src/assets/images/bbg-8.jpg";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center bg-bg-primary fw-bold  my-5 p-5">
              <h1 className="text-success fs-1 ">Welcome To Optic Care</h1>

              <h6 className="my-4 text-success fs-5">
                The face is a picture of the mind with an eyes
              </h6>

              <Link to={"/doctor"}>
                <Button className="rounded-pill fs-5 py-2 px-4 btn-success text-light">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
