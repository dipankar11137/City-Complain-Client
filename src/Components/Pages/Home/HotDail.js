import React from "react";
import hotImage from "../../../Images/Hot dails/Important-TollFree-Numbers.png";

const HotDail = () => {
  return (
    <div
      style={{
        background: `url(https://mlawiy0je0ms.i.optimole.com/206F41w.2d6g.2d53d/w:1800/h:1012/q:auto/https://www.planetwatch.io/wp-content/uploads/2022/08/Air-pollution.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-screen"
    >
      {' '}
      <div className="flex justify-center pt-20">
        <img
          className="rounded-xl shadow-inner h-[600px] w-[500px]"
          src={hotImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default HotDail;
