import React from "react";
import hotImage from "../../../Images/Hot dails/Important-TollFree-Numbers.png";

const HotDail = () => {
  return (
    <div className="flex justify-center mt-7">
      <img
        style={{ height: "600px" }}
        className="rounded-xl shadow-inner"
        src={hotImage}
        alt=""
      />
    </div>
  );
};

export default HotDail;
