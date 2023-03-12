import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Profile = () => {
  const user = useAuthState(auth);
  const email = user[0]?.email;
  const [profiles, setProfile] = useState([]);
  const profile = profiles[0];
  // console.log(profile);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email]);
  return (
    <div className="flex justify-center">
      <div className="mt-5 shadow-xl p-4 rounded-2xl ">
        <img
          style={{ height: "300px", width: "300px" }}
          className="w-56 h-72 rounded-full border-4 border-blue-300 ml-2 "
          src={profile?.image}
          alt=""
        />
        <div className="mt-10">
          <h1 className="text-2xl">
            <span className="font-bold pr-4">Name :</span> {profile?.name}
          </h1>
          <h1 className="text-2xl">
            <span className="font-bold pr-4">Phone :</span>
            {profile?.phone}
          </h1>
          <h1 className="text-2xl">
            <span className="font-bold pr-6">Email :</span>
            {profile?.email}
          </h1>
          <h1 className="text-2xl">
            <span className="font-bold pr-9">Nid :</span> {profile?.nid}
          </h1>
          <h1 className="text-2xl">{profile?.address}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
