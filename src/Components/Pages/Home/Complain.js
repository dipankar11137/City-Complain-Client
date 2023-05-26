import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Complain = () => {
  const user = useAuthState(auth);
  const email = user[0]?.email;
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [ministry, setMinistry] = useState("");
  const [profiles, setProfile] = useState([]);
  const imageHostKey = "e32ceaff91d55c4928a4f78306c254aa";
  const profile = profiles[0];
  //   console.log(option);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [email]);
  const divisionNames = [
    "Barishal",
    "Chattogram",
    "Dhaka",
    "Khulna",
    "Rajshahi",
    "Rangpur",
    "Mymensingh",
    "Sylhet",
  ];
  const districtNames = [
    "Bagerhat",
    "Bandarban",
    "Barguna",
    "Barisal",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chapai Nawabganj",
    "Chittagong",
    "Chuadanga",
    "Comilla",
    "Cox's Bazar",
    "Dhaka",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jaipurhat",
    "Jamalpur",
    "Jessore",
    "Jhalakathi",
    "Jhenaidah",
    "Khagrachhari",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kushtia",
    "Lakshmipur",
    "Lalmonirhat",
    "Madaripur",
    "Magura",
    "Manikganj",
    "Maulvibazar",
    "Meherpur",
    "Moulvibazar",
    "Munshiganj",
    "Mymensingh",
    "Naogaon",
    "Narail",
    "Narayanganj",
    "Narsingdi",
    "Natore",
    "Nawabganj",
    "Netrakona",
    "Nilphamari",
    "Noakhali",
    "Pabna",
    "Panchagarh",
    "Parbatipur",
    "Patuakhali",
    "Pirojpur",
    "Rajbari",
    "Rajshahi",
    "Rangamati",
    "Rangpur",
    "Satkhira",
    "Shariatpur",
    "Sherpur",
    "Sirajganj",
    "Sunamganj",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];

  const ministryNames = [
    "Ministry of Agriculture",
    "Ministry of Civil Aviation and Tourism",
    "Ministry of Chittagong Hill Tracts Affairs",
    "Ministry of Commerce",
    "Ministry of Communications",
    "Ministry of Cultural Affairs",
    "Ministry of Defence",
    "Ministry of Disaster Management and Relief",
    "Ministry of Education",
    "Ministry of Energy, Power and Mineral Resources",
    "Ministry of Environment, Forest and Climate Change",
    "Ministry of Expatriates' Welfare and Overseas Employment",
    "Ministry of Finance",
    "Ministry of Fisheries and Livestock",
    "Ministry of Food",
    "Ministry of Foreign Affairs",
    "Ministry of Health and Family Welfare",
    "Ministry of Home Affairs",
    "Ministry of Housing and Public Works",
    "Ministry of Industries",
    "Ministry of Information",
    "Ministry of Information and Communication Technology",
    "Ministry of Jute and Textiles",
    "Ministry of Labour and Employment",
    "Ministry of Land",
    "Ministry of Law, Justice and Parliamentary Affairs",
    "Ministry of Liberation War Affairs",
    "Ministry of Local Government, Rural Development and Cooperatives",
    "Ministry of Maritime Affairs",
    "Ministry of Planning",
    "Ministry of Post, Telecommunication and Information Technology",
    "Ministry of Primary and Mass Education",
    "Ministry of Public Administration",
    "Ministry of Railways",
    "Ministry of Religious Affairs",
    "Ministry of Road Transport and Bridges",
    "Ministry of Science and Technology",
    "Ministry of Shipping",
    "Ministry of Social Welfare",
    "Ministry of Textiles and Jute",
    "Ministry of Water Resources",
  ];

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const image = imageData.data.url;
          const updateComplain = {
            ...data,
            image: image,
            division: division,
            district: district,
            ministry: ministry,
            email: email,
            profile: profile,
          };

          // console.log(updateComplain);
          //   save complain our database
          fetch("http://localhost:5000/complains", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updateComplain),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("Complain is Successful");
              reset();
            });
        }
      });
  };
  return (
    <div
      style={{
        background: `url(https://mlawiy0je0ms.i.optimole.com/206F41w.2d6g.2d53d/w:1800/h:1012/q:auto/https://www.planetwatch.io/wp-content/uploads/2022/08/Air-pollution.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex justify-center"
    >
      <div>
        <div className="shadow-lg mt-5 p-4 bg-white rounded-lg mb-20">
          <form
            className=" flex justify-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <h1 className="text-3xl  text-center font-bold mb-3">
                Write Complain
              </h1>
              {/* Location Division */}
              <select
                onChange={e => setDivision(e.target.value)}
                className="select select-info w-full hover:shadow-xl"
              >
                <option disabled selected>
                  select Your Division
                </option>

                {divisionNames.map(data => (
                  <option>{data}</option>
                ))}
              </select>
              {/* Location District */}
              <select
                onChange={e => setDistrict(e.target.value)}
                className="select select-info w-full  hover:shadow-xl mt-3"
              >
                <option disabled selected>
                  select Your District
                </option>

                {districtNames.map(data => (
                  <option>{data}</option>
                ))}
              </select>

              {/* Location */}
              <label className="label">
                <span className="label-text">Current location</span>
              </label>
              <input
                type="text"
                placeholder="Current Location"
                className="input input-bordered bg-white  sm:w-full  hover:shadow-xl shadow-inner"
                {...register('location', {
                  required: {
                    value: true,
                    message: 'Location is Required',
                  },
                })}
              />
              <label className="label">
                {errors.location?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.location?.message}
                  </span>
                )}
              </label>
              {/* date */}
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered bg-white  sm:w-full  hover:shadow-xl shadow-inner"
                {...register('date', {
                  required: {
                    value: true,
                    size: 20,
                    message: 'Date is Required',
                  },
                })}
              />
              <label className="label">
                {errors.date?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.date?.message}
                  </span>
                )}
              </label>

              {/* select  reason*/}

              {/* select Ministry */}
              <select
                onChange={e => setMinistry(e.target.value)}
                className="select select-info w-full  hover:shadow-xl mt-3"
              >
                <option disabled selected>
                  Select Ministry
                </option>

                {ministryNames.map(data => (
                  <option>{data}</option>
                ))}
              </select>

              {/* Complain */}
              <label className="label">
                <span className="label-text">Complain</span>
              </label>
              <textarea
                type="textarea"
                placeholder="Write Your Complain"
                className="input input-bordered bg-white lg:w-96 h-28 sm:w-full  hover:shadow-xl shadow-inner"
                {...register('complain', {
                  required: {
                    value: true,
                    message: 'Complain is Required',
                  },
                })}
              />
              <label className="label">
                {errors.complain?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.complain?.message}
                  </span>
                )}
              </label>

              {/* image */}
              <label className="label">
                <span className="label-text">Problem Images</span>
              </label>
              <input
                type="file"
                placeholder="Your Location"
                className="input input-bordered bg-white lg:w-96 pt-2 sm:w-full  hover:shadow-xl shadow-inner"
                {...register('image', {
                  required: {
                    value: true,
                    message: 'Image is Required',
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors?.image?.message}
                  </span>
                )}
              </label>
              {/* submit */}

              {ministry ? (
                <input
                  className="btn mt-5 w-full text-white"
                  type="submit"
                  value="SUBMIT"
                />
              ) : (
                <input
                  className="btn mt-5 w-full text-white"
                  disabled
                  type="submit"
                  value="SUBMIT"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Complain;
