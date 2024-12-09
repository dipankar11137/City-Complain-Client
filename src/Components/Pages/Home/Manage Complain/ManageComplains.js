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
  const handleDelete = id => {
    const proceed = window.confirm('Are You Sure ?');
    if (proceed) {
      const url = `http://localhost:5000/complains/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          const remaining = complains.filter(product => product._id !== id);
          setComplain(remaining);
          toast.success('Successfully Remove');
        });
    }
  };
  const handleProcessing = id => {
    const updatePayment = { processing: true };
    fetch(`http://localhost:5000/processing/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatePayment),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully process');
      });
  };
  const handleDone = id => {
    const updatePayment = { done: true };
    fetch(`http://localhost:5000/done/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatePayment),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully done');
      });
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
                <th>Complainer Name</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
                <th>Complain</th>
              </tr>
            </thead>
            <tbody>
              {complains.map(complain => (
                <ManageComplain
                  key={complain._id}
                  complain={complain}
                  handleDelete={handleDelete}
                  handleProcessing={handleProcessing}
                  handleDone={handleDone}
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
