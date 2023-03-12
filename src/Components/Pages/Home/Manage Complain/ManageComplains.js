import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ManageComplain from "./ManageComplain";

const ManageComplains = () => {
  const [complains, setComplain] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/complains")
      .then((res) => res.json())
      .then((data) => setComplain(data));
  }, [complains]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/complains/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = complains.filter((product) => product._id !== id);
          setComplain(remaining);
          toast.success("Successfully Remove");
        });
    }
  };
  return (
    <div className="mx-5">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head*/}
            <thead>
              <tr>
                <th>Image</th>
                <th>Ministry</th>
                <th>Division</th>
                <th>District</th>
                <th>Address</th>
                <th>Date</th>
                <th>Complain</th>
                <th>Complainer Name</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {complains.map((complain) => (
                <ManageComplain
                  key={complain._id}
                  complain={complain}
                  handleDelete={handleDelete}
                ></ManageComplain>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageComplains;
