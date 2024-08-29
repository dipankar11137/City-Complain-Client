import React from 'react';
import { FaHandPointDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
    <div>
      <div className="border-b-[1px] pb-10 border-red-200">
        <h1 className="text-center text-5xl text-indigo-800 mt-14 font-serif font-bold ">
          City Complain Management System
        </h1>
      </div>
      <div className="flex items-end h-[340px] bg-red-30">
        <div className="grid grid-cols-12">
          <div className="col-span-5 p-4 flex items-center">
            <img
              className="h-64"
              src="https://www.kindpng.com/picc/m/557-5574091_welcome-to-our-new-website-hd-png-download.png"
              alt=""
            />
          </div>
          <div className="col-span-3 flex items-center justify-center">
            <img
              className="rounded-full h-52"
              src="https://media.istockphoto.com/id/1141219682/vector/handshake-sign-in-the-circle-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=ETV2A6cXO_fBRMiaaR9NwAds0hT0fvlfRHqpXYuEV3k="
              alt=""
            />
          </div>
          <div className="col-span-4 p-4 flex items-center justify-center">
            <div>
              <div className=" flex justify-end -mt-10">
                <h1 className=" text-4xl animate-bounce text-red-600">
                  <FaHandPointDown />
                </h1>
              </div>
              <Link to="/complain" className="cursor-pointer">
                <img
                  className="h-64 -mt-5"
                  src="https://clipart-library.com/2023/Complaint-Box.bak.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
