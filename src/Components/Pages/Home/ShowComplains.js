import React, { useEffect, useState } from "react";
import ShowComplain from "./ShowComplain";

const ShowComplains = () => {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/complains")
      .then((res) => res.json())
      .then((data) => setComplains(data));
  }, []);
  return (
    <div className="px-10 mb-20">
      {/* <h1>Hello {complains.length}</h1> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-3 mt-10">
        {complains.map((complain) => (
          <ShowComplain key={complain._id} complain={complain}></ShowComplain>
        ))}
      </div>
    </div>
  );
};

export default ShowComplains;
