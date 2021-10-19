import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { details } = useAuth();

  console.log(details);

  const selected = details.find(
    (detail) => Number(detail.id) === Number(serviceId)
  );

  console.log(selected);

  return (
    <div>
      <Container>
        <div className="card mb-5 p-1 m-5 border-0 shadow-lg pb-5">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="ms-3 mt-5">
                <img
                  width="75%"
                  className="img-fluid rounded-circle border border-2 p-2"
                  src={selected.service_image}
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-6 py-5">
              <div className="card-body">
                <h4 className="card-title">{selected.service_name}</h4>
                <p className="card-text">{selected.description}</p>
                <h6>
                  <i className="fas fa-clock"></i> {selected.time}
                </h6>
                <h6>
                  <i className="fas fa-calendar-alt"></i> {selected.day}
                </h6>

                <div className="d-flex align-items-center ">
                  <img
                    width="100px"
                    height="100px"
                    className="rounded-circle border border-1 me-2"
                    src={selected.doctor_image}
                    alt=""
                  />
                  <h5>{selected.doctor_name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
