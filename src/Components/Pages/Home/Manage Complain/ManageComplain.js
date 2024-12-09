import React, { useState } from 'react';
import '../../../CSS/PicStyle.css';

const ManageComplain = ({
  complain,
  handleDelete,
  handleProcessing,
  handleDone,
}) => {
  const [edit, setEdit] = useState(false);
  return (
    <tr>
      {edit && (
        <div className="shadow-2xl shadow-orange-700 border-4 border-black my-5 w-[400px] rounded-xl m-4">
          <img
            className="w-56 h-52 rounded-full ml-20"
            src={complain?.profile?.image}
            alt=""
          />
          <div className="mt-16 pl-4 w-full ">
            <div className="text-left py-8">
              <div className="flex items-baseline justify-between">
                <p className="font-bold w-1/3 text-2xl">Name</p>
                <span className="w-2/3 text-2xl">
                  : {complain?.profile?.name}
                </span>
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3 text-2xl">Email</p>
                <span className="w-2/3 text-lg">
                  : {complain?.profile?.email}
                </span>
              </div>
              {complain?.profile?.birthday && (
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3 text-2xl">Birthday</p>
                  <span className="w-2/3 text-2xl">
                    : {complain?.profile?.birthday}
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3 text-2xl">Phone</p>
                <span className="w-2/3 text-2xl">
                  : {complain?.profile?.phone}
                </span>
              </div>
              {complain?.profile?.sex && (
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3 text-2xl">Sex</p>
                  <span className="w-2/3 text-2xl">
                    : {complain?.profile?.sex}
                  </span>
                </div>
              )}

              {complain?.profile?.bio && (
                <div className="flex items-baseline justify-between mt-1">
                  <p className="font-bold w-1/3 text-2xl">Bio</p>
                  <span className="w-2/3 text-2xl">
                    : {complain?.profile?.bio}
                  </span>
                </div>
              )}

              <div className="flex items-baseline justify-between mt-1">
                <p className="font-bold w-1/3 text-2xl">Address</p>
                <span className="w-2/3 text-2xl">
                  : {complain?.profile?.address}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {' '}
            <button
              onClick={() => setEdit(false)}
              className="bg-red-600 py-3 px-5 mr-2 mb-3 shadow-2xl shadow-red-600 text-xl pic-style rounded-3xl text-white font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <th>
        <img className="h-14 w-20 rounded-lg" src={complain?.image} alt="" />
      </th>
      <td>{complain?.ministry}</td>
      <td>{complain?.division}</td>
      <td>{complain?.district}</td>

      <td>{complain?.location}</td>
      <td>{complain?.date}</td>

      <td>
        <div>
          <button onClick={() => setEdit(true)} className="">
            {' '}
            {complain?.profile?.name}
          </button>
        </div>
      </td>
      <td>
        <h1>None</h1>
      </td>
      <td>
        {complain.done ? (
          <h1>Complete</h1>
        ) : (
          <>
            {' '}
            {complain.processing ? (
              <button
                onClick={() => handleDone(complain?._id)}
                className="btn btn-xs btn-secondary"
              >
                Done
              </button>
            ) : (
              <button
                onClick={() => handleProcessing(complain?._id)}
                className="btn btn-xs btn-accent"
              >
                Processing
              </button>
            )}
          </>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(complain?._id)}
          className="btn btn-xs"
        >
          Delete
        </button>
      </td>
      <td>{complain?.complain}</td>
    </tr>
  );
};

export default ManageComplain;
