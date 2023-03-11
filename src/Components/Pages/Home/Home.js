import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            {/* <h2 className="text-4xl bg-slate-900 text-lime-400 font-bold text-center mb-3 uppercase p-1">
            Welcome <span className="">to My</span> DashBoard
          </h2> */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-xl">
                <Link to="/" className="font-bold ">
                  Profile
                </Link>
              </li>
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-xl">
                <Link to="/complain" className="font-bold ">
                  Complain
                </Link>
              </li>
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-xl">
                <Link to="/showComplains" className="font-bold ">
                  Show Complain
                </Link>
              </li>
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-xl">
                <Link to="/complain" className="font-bold ">
                  Edit Profile
                </Link>
              </li>
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-xl">
                <Link to="/manageComplains" className="font-bold ">
                  Manage Complain
                </Link>
              </li>
              <li className="hover:bg-red-700 rounded-lg hover:text-white hover:text-xl">
                <Link to="/hotDail" className="font-bold ">
                  Hot Dails
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
