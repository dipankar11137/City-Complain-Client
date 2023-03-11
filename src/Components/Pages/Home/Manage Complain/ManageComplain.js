import React from "react";

const ManageComplain = ({ complain, handleDelete }) => {
  return (
    <tr>
      <th>
        <img className="h-14 w-20 rounded-lg" src={complain?.image} alt="" />
      </th>
      <td>{complain?.ministry}</td>
      <td>{complain?.division}</td>
      <td>{complain?.district}</td>
      <td>{complain?.location}</td>
      <td>{complain?.date}</td>
      <td>{complain?.complain}</td>
      <td>{complain?.profile?.name}</td>
      <td>
        <button onClick={() => handleDelete(complain?._id)} className="btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageComplain;
