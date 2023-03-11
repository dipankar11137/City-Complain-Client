import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`https://boxberry.onrender.com/carBooking/${email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [booking]);

  const handleBook = () => {
    navigate("/myOrders");
  };

  const menuItems = (
    <>
      <li className="font-bold hover:text-orange-400">
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li className="font-bold hover:text-orange-400">
          <Link to="/myOrders">My Orders</Link>
        </li>
      )}
      <li className="font-bold hover:text-orange-400">
        <Link to="/showAllReview">Reviews</Link>
      </li>

      {user && (
        <li className="font-bold hover:text-orange-400">
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
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
        {user ? (
          <div className="dropdown dropdown-end  mr-16">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="https://placeimg.com/80/80/people" alt="" /> */}
                {user.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  // <h1>D</h1>
                  <img
                    src="https://cdn.imgbin.com/6/25/24/imgbin-user-profile-computer-icons-user-interface-mystique-aBhn3R8cmqmP4ECky4DA3V88y.jpg"
                    alt=""
                  />
                )}
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
                <Link to="/">Settings</Link>
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
          <ul className="mr-5">
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
