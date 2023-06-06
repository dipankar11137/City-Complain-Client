import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CreateAccount = () => {
  const [gUser] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = 'c70a5fc10619997bd7315f2bf28d0f3e';

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  let signInError;
  if (gUser) {
    navigate('/');
  }

  const createDBUser = (name, email, phone, address, image, nid) => {
    const updateProfile = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      image: image,
      nid: nid,
    };
    console.log(updateProfile);

    fetch(`http://localhost:5000/create-user/${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateProfile),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Updated profile');
        navigate('/');
      });
  };

  const onSubmit = data => {
    // console.log(data);
    const image = data.image[0];
    createUserWithEmailAndPassword(data.email, data.password);
    signInWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;
        createDBUser(
          data.name,
          data.email,
          data.phone,
          data.address,
          image,
          data.nid
        );
        // toast.success('Updated profile');
        navigate('/');
      });
  };
  return (
    <div
      class="hero min-h-screen "
      style={{
        background: `url(https://mlawiy0je0ms.i.optimole.com/206F41w.2d6g.2d53d/w:1800/h:1012/q:auto/https://www.planetwatch.io/wp-content/uploads/2022/08/Air-pollution.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex justify-center pt-10 pb-20 bg-slate-200"
    >
      <div className="flex  justify-center items-center  my-5">
        <div className="card w-[500px] shadow-xl bg-violet-50">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control   ">
                {/* name */}
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full  "
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* email */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full  "
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email',
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Phone */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  className="input input-bordered bg-white w-full  "
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'Phone is Required',
                    },
                    pattern: {
                      value: /^\d{11}$/,
                      message: 'Provide a valid Phone Number',
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                  {errors.phone?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Nid */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Nid Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Nid Number"
                  className="input input-bordered bg-white w-full  "
                  {...register('nid', {
                    required: {
                      value: true,
                      message: 'Nid is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.nid?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.nid.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Address */}
              <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Your Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="input input-bordered bg-white w-full  "
                  {...register('address', {
                    required: {
                      value: true,
                      message: 'Address is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.address?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Images */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Problem Images</span>
                </label>
                <input
                  type="file"
                  placeholder="Your Location"
                  className="input input-bordered bg-white w-96 pt-2 sm:w-full   hover:shadow-xl shadow-inner"
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
              </div>
              {/* password */}
              {/* <div className="form-control w-full  ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered bg-white w-full  "
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div> */}
              <div className="form-control   mb-2 w-full">
                <label className="label">
                  {' '}
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be 6 characters long',
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        'Password must have uppercase, number and special characters',
                    },
                  })}
                  className="input input-bordered w-full "
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {signInError}
              {/* submit */}
              <input
                className="btn w-full text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small>
                Already Have an Account ?{' '}
                <Link to="/login" className="text-orange-600 font-bold">
                  Please Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
