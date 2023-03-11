import React from "react";

const ShowComplain = ({ complain }) => {
  console.log(complain);
  return (
    <div>
      <div
        style={{ width: "500px" }}
        className="card bg-base-100 w-96 text-black shadow-2xl hover:bg-red-100  hover:shadow-inner"
      >
        <figure>
          <img
            className="w-full pic-style"
            src={complain?.image}
            alt=""
            style={{ height: "350px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title  text-lg">
            {" "}
            <span className="font-bold"> Division :</span>
            {complain?.division}
          </h2>
          <h2 className="card-title text-lg font-medium ">
            {" "}
            <span className="font-bold"> District : </span>
            {complain?.district}
          </h2>
          <h2 className="card-title  text-sm font-medium">
            {" "}
            <span className="font-bold text-lg"> Ministry : </span>
            {complain?.ministry}
          </h2>
          <h2 className="card-title  text-sm font-medium">
            {" "}
            <span className="font-bold text-lg"> Current Location : </span>
            {complain?.location}
          </h2>
          <h2 className="card-title  text-sm font-medium">
            {" "}
            <span className="font-bold text-lg"> Date : </span>
            {complain?.date}
          </h2>
          <h2 className="card-title  text-sm font-medium">
            {" "}
            <span className="font-bold text-lg"> Complain : </span>
            {complain?.complain}
          </h2>
        </div>
        <button className="btn font-bold">Accept</button>
      </div>
    </div>
  );
};

export default ShowComplain;
