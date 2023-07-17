import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const AddReview = ({ email, setReview }) => {
  const [user] = useAuthState(auth);
  const [users, setUser] = useState([]);
  const [rating, setRating] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [users, user?.email]);

  const image = users[0]?.image;
  const name = users[0]?.name;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = data => {
    const updateData = { ...data, email, rating, userName: name, image };

    fetch(`http://localhost:5000/review`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateData),
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Successfully Add Review ');
        reset();
        setReview(false);
      });
  };
  return (
    <div className=" pb-5 flex justify-center">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold">
                Add Review
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Write Here"
              className="input input-bordered bg-white w-full max-w-xs hover:shadow-xl shadow-inner pt-1 text-xl h-20"
              {...register('review', {
                required: {
                  value: true,
                  message: 'Review is Required',
                },
              })}
            />
            <label className="label">
              {errors.review?.type === 'required' && (
                <span className="label-text-alt text-red-500">
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>
          <select
            onClick={e => setRating(e.target.value)}
            className="select select-primary w-full max-w-xs mb-3 text-xl"
          >
            <option disabled selected>
              Add Rating
            </option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          {rating ? (
            <input
              className="btn btn-primary w-full text-white max-w-xs"
              type="submit"
              value="SUbmit"
            />
          ) : (
            <input
              className="btn btn-primary w-full text-white max-w-xs"
              disabled
              type="submit"
              value="SUbmit"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddReview;
