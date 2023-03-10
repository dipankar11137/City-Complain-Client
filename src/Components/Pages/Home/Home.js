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
              <li>
                <Link to="/" className="font-bold hover:text-orange-600">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/complain"
                  className="font-bold hover:text-orange-600"
                >
                  Complain
                </Link>
              </li>
              <li>
                <Link
                  to="/complains"
                  className="font-bold hover:text-orange-600"
                >
                  Show Complain
                </Link>
              </li>
              <li>
                <Link
                  to="/complain"
                  className="font-bold hover:text-orange-600"
                >
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/complain"
                  className="font-bold hover:text-orange-600"
                >
                  Manage Item
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
