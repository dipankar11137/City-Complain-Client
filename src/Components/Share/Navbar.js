import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const user = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const email = user[0]?.email;
  const [profiles, setProfile] = useState([]);
  const profile = profiles[0];

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, [profiles, email]);

  return (
    <div className="  navbar bg-green-900  text-white ">
      <div className="navbar-start ">
        <div className="dropdown">
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black "
          >
            {/* {menuItems} */}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-bold lg:text-3xl  sm:text-sm text-red-00"
        >
          <img className="h-12 mr-2 " src="" alt="" />
          City Complain Management System
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:pr-36 ml-40">
        {/* <ul className="menu menu-horizontal p-0">{menuItems}</ul> */}
      </div>
      {/* Image */}
      <div className="navbar-end">
        {user[0] ? (
          <div className="dropdown dropdown-end  mr-16">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profile?.image} alt="" />
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40 dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-purple-900"
            >
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/myProfile">Settings</Link>
              </li>

              <li className=" font-bold">
                {user ? (
                  <button
                    className=" font-bold text-orange-500"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <ul className="mr-20 ">
            <li className="font-semibold text-xl">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
