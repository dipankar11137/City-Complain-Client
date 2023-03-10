import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-5 shadow-xl p-4 rounded-2xl">
        <img
          className="w-56 h-72 rounded-full border-4 border-blue-300 ml-6"
          src="https://tse1.mm.bing.net/th?id=OIP.a_C9v1H7RBbVyFjU4udThgHaKX&pid=Api&P=0"
          alt=""
        />
        <div className="mt-10">
          <h1 className="text-2xl">
            <span className="font-bold pr-4">Name :</span> Joff Chop
          </h1>
          <h1 className="text-2xl">
            <span className="font-bold pr-4">Phone :</span>+8801725798554
          </h1>
          <h1 className="text-2xl">
            <span className="font-bold pr-6">Email :</span>abc@def.com
          </h1>
          <h1 className="text-2xl">
            <span className="font-bold pr-9">Nid :</span> 5258745
          </h1>
          <h1 className="text-2xl">
            {/* <span className="font-bold ">Location : </span>Dhaka */}
            Dhaka , Bangladesh
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
