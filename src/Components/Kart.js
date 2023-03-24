import React from "react";

const Kart = ({ ihtiyac }) => {
  return (
    <div
      className="card col-md-3 p-0 mx-2 my-3"
      style={{ borderRadius: "10px" }}
    >
      <img
        className="card-img-top"
        src={ihtiyac.resim}
        alt="Card image cap"
        style={{ width: "auto", height: "auto" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{ihtiyac.adi}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
export default Kart;
