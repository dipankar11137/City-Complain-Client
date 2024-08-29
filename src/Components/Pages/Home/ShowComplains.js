import React, { useEffect, useState } from 'react';
import ShowComplain from './ShowComplain';

const ShowComplains = () => {
  const [complains, setComplains] = useState([]);
  const [division, setDivision] = useState('Dhaka');
  const [date, setDate] = useState('');
  const [district, setDistrict] = useState('');
  // console.log(complains);

  useEffect(() => {
    fetch(`http://localhost:5000/complain/${division}`)
      .then(res => res.json())
      .then(data => setComplains(data));
  }, [division]);
  useEffect(() => {
    fetch(`http://localhost:5000/complainDistrict/${district}`)
      .then(res => res.json())
      .then(data => setComplains(data));
  }, [district]);
  useEffect(() => {
    fetch(`http://localhost:5000/complainDate/${date}`)
      .then(res => res.json())
      .then(data => setComplains(data));
  }, [date]);

  const divisionNames = [
    'Barishal',
    'Chattogram',
    'Dhaka',
    'Khulna',
    'Rajshahi',
    'Rangpur',
    'Mymensingh',
    'Sylhet',
  ];

  const districtNames = {
    Barishal: [
      'Barguna',
      'Barishal',
      'Bhola',
      'Jhalokathi',
      'Patuakhali',
      'Pirojpur',
    ],
    Chattogram: [
      'Bandarban',
      'Brahmanbaria',
      'Chandpur',
      'Chattogram',
      'Cumilla',
      "Cox's Bazar",
      'Feni',
      'Khagrachhari',
      'Lakshmipur',
      'Noakhali',
      'Rangamati',
    ],
    Dhaka: [
      'Dhaka',
      'Faridpur',
      'Gazipur',
      'Gopalganj',
      'Kishoreganj',
      'Madaripur',
      'Manikganj',
      'Munshiganj',
      'Narayanganj',
      'Narsingdi',
      'Rajbari',
      'Shariatpur',
      'Tangail',
    ],
    Khulna: [
      'Bagerhat',
      'Chuadanga',
      'Jashore',
      'Jhenaidah',
      'Khulna',
      'Kushtia',
      'Magura',
      'Meherpur',
      'Narail',
      'Satkhira',
    ],
    Rajshahi: [
      'Bogura',
      'Joypurhat',
      'Naogaon',
      'Natore',
      'Nawabganj',
      'Pabna',
      'Rajshahi',
      'Sirajganj',
    ],
    Rangpur: [
      'Dinajpur',
      'Gaibandha',
      'Kurigram',
      'Lalmonirhat',
      'Nilphamari',
      'Panchagarh',
      'Rangpur',
      'Thakurgaon',
    ],
    Mymensingh: ['Jamalpur', 'Mymensingh', 'Netrokona', 'Sherpur'],
    Sylhet: ['Habiganj', 'Moulvibazar', 'Sunamganj', 'Sylhet'],
  };
  return (
    <div className="px-10 mb-20">
      <div className="mt-5">
        <h1 className="text-xl font-semibold pl-3">
          Select Location : {division} Date : {date}
        </h1>
        <h1 className="text-xl font-semibold pl-3">
          Complain Number : {complains?.length}
        </h1>
        <div>
          <select
            onChange={e => setDivision(e.target.value)}
            className="select select-info  max-w-xs hover:shadow-xl mt-2 text-xl w-[250px]"
          >
            <option disabled hidden selected>
              Dhaka
            </option>

            {divisionNames.map(data => (
              <option>{data}</option>
            ))}
          </select>

          {/* district */}
          <select
            onChange={e => setDistrict(e.target.value)}
            className="select select-info w-[250px] max-w-xs hover:shadow-xl mt-2 text-xl ml-5"
            value={district}
            disabled={!division}
          >
            <option value="">Select District</option>
            {(districtNames[division] || []).map(district => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
          <input
            onChange={e => setDate(e.target.value)}
            className="ml-10 p-2 w-full w-[250px] hover:shadow-xl mt-2 text-xl rounded-lg border-2 border-blue-600"
            type="date"
            name=""
            id=""
          />
        </div>
      </div>

      <div>
        {complains.length === 0 ? (
          <div className=" w-full mt-36">
            <h1 className=" text-center text-4xl font-serif text-slate-400 ">
              No Complain hare in this location{' '}
            </h1>
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mx-3 mt-10">
            {complains.map(complain => (
              <ShowComplain
                key={complain._id}
                complain={complain}
              ></ShowComplain>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowComplains;
