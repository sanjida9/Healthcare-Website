import React from "react";
import Doctor from "../../components/Doctor/Doctor";

const doctors = [
  {
    id: 1,
    doctorName: "Mariya Benedicte",
    serviceName: "Retina Repair",
    img: "https://i.ibb.co/X4szcLm/inmedical-doctor-1-1-370x255.jpg",
    time: "10:00AM-11:00PM",
    day: "Saturday-Monday",
  },

  {
    id: 2,
    doctorName: "Staci Rixon",
    serviceName: "Glaucoma & Cornea",
    img: "https://i.ibb.co/XxCc7zJ/inmedical-doctor-2-1-370x255.jpg",
    time: "09:00AM-11:00PM",
    day: "Saturday-Thursday",
  },

  {
    id: 3,
    doctorName: "Linnea Scandrick",
    serviceName: "Dry Eye Surgery",
    img: "https://i.ibb.co/T8C3VFX/doctors-medic-10-1-370x255.jpg",
    time: "10:00AM-06:00PM",
    day: "Saturday-Wednesday",
  },

  {
    id: 4,
    doctorName: "Robinetta Pebworth",
    serviceName: "Cornea Transplant",
    img: "https://i.ibb.co/rcPRvL7/doctor-medic-5-1-370x255.jpg",
    time: "11:00AM-11:00PM",
    day: "Saturday-Monday",
  },

  {
    id: 5,
    doctorName: "Larissa Pikett",
    serviceName: "Surgical Procedure",
    img: "https://i.ibb.co/y0nPk2Y/doctors-medic-7-1-370x255.jpg",
    time: "10:00AM-09:00PM",
    day: "Saturday-Monday",
  },

  {
    id: 6,
    doctorName: "Jillane Bruckental",
    serviceName: "Laser Surgery",
    img: "https://i.ibb.co/mH7vZ3t/doctor-medic-2-1-370x255.jpg",
    time: "10:00AM-08:00PM",
    day: "Sunday-Wednesday",
  },

  {
    id: 7,
    doctorName: "Ayn Whitnall",
    serviceName: "Free Lense Consultation",
    img: "https://i.ibb.co/T8C3VFX/doctors-medic-10-1-370x255.jpg",
    time: "08:00AM-07:00PM",
    day: "Saturday-Monday",
  },

  {
    id: 8,
    doctorName: "Laurie Dunthorn",
    serviceName: "Post Operative Lasik Care",

    img: "https://i.ibb.co/rcPRvL7/doctor-medic-5-1-370x255.jpg",
    time: "10:00AM-09:00PM",
    day: "Saturday-Monday",
  },

  {
    id: 9,
    doctorName: "Sibella Fitter",
    serviceName: "Great Lasik Consultation",
    img: "https://i.ibb.co/XxCc7zJ/inmedical-doctor-2-1-370x255.jpg",
    time: "04:00PM-10:00PM",
    day: "Saturday-Tuesday",
  },
];

const Doctors = () => {
  return (
    <div className="container">
      <div className="row ">
        <h1
          style={{ color: "#023c76" }}
          className="mt-5 text-center text-success fw-bold"
        >
          <i>Our doctors</i> <br />
          <span className="fs-3" style={{ color: "black" }}>
            <i>-Eye Specialists-</i>
          </span>
        </h1>
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
