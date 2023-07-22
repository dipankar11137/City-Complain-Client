import React, { useEffect, useState } from "react";
import ShowComplain from "./ShowComplain";

const ShowComplains = () => {
  const [complains, setComplains] = useState([]);
  const [division, setDivision] = useState("Dhaka");
  const [date, setDate] = useState('');
  console.log(complains);

  useEffect(() => {
    fetch(`http://localhost:5000/complain/${division}`)
      .then(res => res.json())
      .then(data => setComplains(data));
  }, [division]);
  useEffect(() => {
    fetch(`http://localhost:5000/complainDate/${date}`)
      .then(res => res.json())
      .then(data => setComplains(data));
  }, [date]);

  const divisionNames = [
    'Barishal',
    'Chattogram',
    'Dhaka',
    'Khulna',
    'Rajshahi',
    'Rangpur',
    'Mymensingh',
    'Sylhet',
  ];
  return (
    <div className="px-10 mb-20">
      <div className="mt-5">
        <h1 className="text-xl font-semibold pl-3">
          Select Location : {division} Date : {date}
        </h1>
        <h1 className="text-xl font-semibold pl-3">
          Complain Number : {complains?.length}
        </h1>
        <div>
          <select
            onChange={e => setDivision(e.target.value)}
            className="select select-info w-full max-w-xs hover:shadow-xl mt-2 text-xl"
          >
            <option disabled hidden selected>
              Dhaka
            </option>

            {divisionNames.map(data => (
              <option>{data}</option>
            ))}
          </select>
          <input
            onChange={e => setDate(e.target.value)}
            className="ml-10 p-2 w-full max-w-xs hover:shadow-xl mt-2 text-xl rounded-lg border-2 border-blue-600"
            type="date"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-3 mt-10">
        {complains.map(complain => (
          <ShowComplain key={complain._id} complain={complain}></ShowComplain>
        ))}
      </div>
    </div>
  );
};

export default ShowComplains;
