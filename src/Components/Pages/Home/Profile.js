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
    <div
      class="hero min-h-screen "
      style={{
        background: `url(https://mlawiy0je0ms.i.optimole.com/206F41w.2d6g.2d53d/w:1800/h:1012/q:auto/https://www.planetwatch.io/wp-content/uploads/2022/08/Air-pollution.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex justify-center ">
        <div className=" shadow-xl p-4 rounded-2xl  bg-slate-50 w-[500px]">
          <img
            style={{ height: '300px', width: '300px' }}
            className="w-56 h-72 rounded-full border-4 border-blue-300 ml-28 "
            src={profile?.image}
            alt=""
          />
          <div className="mt-16 pl-4 w-full ">
            <div className="text-left py-8">
              <div className="flex items-baseline justify-between">
                <p className="font-bold w-1/3 text-2xl">Name</p>
                <span className="w-2/3 text-2xl">: {profile?.name}</span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3 text-2xl">Email</p>
                <span className="w-2/3 text-2xl">: {profile?.email}</span>
              </div>
              {profile?.birthday && (
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3 text-2xl">Birthday</p>
                  <span className="w-2/3 text-2xl">: {profile?.birthday}</span>
                </div>
              )}

              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3 text-2xl">Phone</p>
                <span className="w-2/3 text-2xl">: {profile?.phone}</span>
              </div>
              {profile?.sex && (
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3 text-2xl">Sex</p>
                  <span className="w-2/3 text-2xl">: {profile?.sex}</span>
                </div>
              )}

              {profile?.bio && (
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3 text-2xl">Bio</p>
                  <span className="w-2/3 text-2xl">: {profile?.bio}</span>
                </div>
              )}
              <h1 className="text-2xl mt-3">{profile?.address}</h1>
            </div>
            {/* <div className="mt-10">
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
            <h1 className="text-2xl">
              <span className="font-bold pr-9">Birthday :</span> {profile?.birthday}
            </h1>
            <h1 className="text-2xl">
              <span className="font-bold pr-9">Sex :</span> {profile?.sex}
            </h1>
            <h1 className="text-2xl">
              <span className="font-bold pr-9">Bio :</span> {profile?.bio}
            </h1>
            <h1 className="text-2xl">{profile?.address}</h1>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
