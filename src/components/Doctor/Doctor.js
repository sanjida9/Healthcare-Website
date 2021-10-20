import React from "react";

const Doctor = ({ doctor }) => {
  const { doctorName, img, serviceName, time, day } = doctor;
  return (
    <div className="mt-5 text-center col-lg-4 col-sm-6 gx-5">
      <div
        className="hover-card p-3 mb-5 border-0 rounded shadow card w-100 "
        style={{ background: "#e7f7e7" }}
      >
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h3 className=" card-title text-success">{doctorName}</h3>
          <h5 className="card-text text-success">{serviceName}</h5>
          <h6 className="text-success">
            <i className="fas fa-clock "></i> {time}
          </h6>
          <h6 className="text-success">
            <i className="fas fa-calendar-alt "></i> {day}
          </h6>
          <div className="btn btn-success px-5 mt-2 btnHover">Book Now</div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
