import React, { useState } from 'react';
import ShowProfile from './ShowProfile';

const ManageComplain = ({ complain, handleDelete }) => {
  const [changeEmail, setChangeEmail] = useState('');
  console.log('change', changeEmail);
  const handleClick = email => {
    setChangeEmail(email);
  };
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
      <td>
        {' '}
        <label
          onClick={() => handleClick(complain?.email)}
          htmlFor="show-profile"
          className="btn"
        >
          {complain?.profile?.name}
        </label>
        <ShowProfile email={changeEmail} setChangeEmail={setChangeEmail} />
      </td>
      {/* <td>
        <button onClick={() => handleClick(complain?._id)}>hello</button>
      </td> */}
      <td>
        <button onClick={() => handleDelete(complain?._id)} className="btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageComplain;
