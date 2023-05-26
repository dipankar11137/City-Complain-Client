import React, { useEffect, useState } from 'react';

const ShowProfile = ({ email, setChangeEmail }) => {
  const [profiles, setProfile] = useState([]);
  const profile = profiles[0];
  // console.log(profile);
  // console.log(email);

  useEffect(() => {
    // fetch(`http://localhost:5000/user/${email}`)
    fetch(`http://localhost:5000/user/${email}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [email]);
  return (
    <div>
      <input type="checkbox" id="show-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setChangeEmail('')}
            htmlFor="show-profile"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="flex justify-center ">
            <div className=" shadow-xl p-4 rounded-2xl  bg-slate-50 w-[500px]">
              <img
                style={{ height: '300px', width: '300px' }}
                className="w-56 h-72 rounded-full border-4 border-blue-300 ml-14 "
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
                      <span className="w-2/3 text-2xl">
                        : {profile?.birthday}
                      </span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
