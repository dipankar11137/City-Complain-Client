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
    <div>
      <h1>Hello {complains.length}</h1>
      <div>
        {complains.map((complain) => (
          <ShowComplain key={complain._id} complain={complain}></ShowComplain>
        ))}
      </div>
    </div>
  );
};

export default ShowComplains;
