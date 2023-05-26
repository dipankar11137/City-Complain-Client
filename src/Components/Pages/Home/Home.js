import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Home = () => {
  const user = useAuthState(auth);
  const email = user[0]?.email;
  return (
    <div className="bg-slate-100">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content  ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul
              style={{
                background: `url(https://i.pinimg.com/originals/0e/c4/94/0ec4941e46810561d9eb1ce89d975228.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className="menu p-4 overflow-y-auto w-60    text-white"
            >
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-2xl text-xl mt-5">
                <Link to="/" className="font-bold ">
                  Profile
                </Link>
              </li>
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-2xl text-xl mt-3">
                <Link to="/complain" className="font-bold ">
                  Complain
                </Link>
              </li>
              {email === 'abc@def.com' ? (
                <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-2xl text-xl mt-3">
                  <Link to="/showComplains" className="font-bold ">
                    Show Complain
                  </Link>
                </li>
              ) : (
                <></>
              )}

              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-2xl text-xl mt-3">
                <Link to="/myProfile" className="font-bold ">
                  Edit Profile
                </Link>
              </li>
              <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-2xl text-xl mt-3">
                <Link to="/myComplain" className="font-bold ">
                  My Complain
                </Link>
              </li>

              {email === 'abc@def.com' ? (
                <li className="hover:bg-green-800 rounded-lg hover:text-white hover:text-2xl text-xl mt-3">
                  <Link to="/manageComplains" className="font-bold ">
                    Manage Complain
                  </Link>
                </li>
              ) : (
                <></>
              )}

              <li className="hover:bg-red-700 rounded-lg hover:text-white hover:text-2xl text-xl mt-3">
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
