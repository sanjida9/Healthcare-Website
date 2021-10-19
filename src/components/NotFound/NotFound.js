import React from "react";
import notfound from "./../../assets/images/404.jpg";

const NotFound = () => {
  return (
    <div className="container">
      <img className="img-fluid p-5" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
