import React, { useEffect, useState } from "react";

const ManageComplains = () => {
  const [complains, setComplain] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/complains")
      .then((res) => res.json())
      .then((data) => setComplain(data));
  }, []);
  return (
    <div>
      <h1>Manage {complains.length}</h1>
    </div>
  );
};

export default ManageComplains;
