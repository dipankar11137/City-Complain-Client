import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import ShowComplain from "./ShowComplain";

const MyComplain = () => {
  const user = useAuthState(auth);
  const email = user[0]?.email;
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/complains/${email}`)
      .then(res => res.json())
      .then(data => setComplains(data));
  }, [email]);
  return (
    <div className="px-10 mb-20">
      <h1 className="text-3xl mt-3 text-center font-bold">My Complain </h1>
      <h1 className="text-3xl mt-3 text-center font-bold">
        Complain Number : {complains?.length}
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-3 mt-10">
        {complains.map((complain) => (
          <ShowComplain key={complain._id} complain={complain}></ShowComplain>
        ))}
      </div>
    </div>
  );
};

export default MyComplain;
