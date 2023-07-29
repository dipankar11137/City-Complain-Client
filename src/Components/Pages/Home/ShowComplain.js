import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi';
import { FaFileDownload } from 'react-icons/fa';
import ReactToPdf from 'react-to-pdf';
import auth from '../../../firebase.init';
import AddReview from './Review/AddReview';
import ShowReview from './Review/ShowReview';

const ShowComplain = ({ complain }) => {
  const [user] = useAuthState(auth);
  const userEmail = user?.email;
  // console.log(complain); 24392
  const [arrow, setArrow] = useState(false);
  const [review, setReview] = useState(false);
  // const navigator = useNavigate();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/review/${complain?.email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // setArrow(false);
        setReviews(data);
      });
  }, [reviews, complain?.email]);

  // pdf
  const cardRef = React.useRef();

  const pdfFilename = complain?.ministry
    ? `${complain.ministry}.pdf`
    : 'card.pdf';
  return (
    <div>
      <div ref={cardRef}>
        <div
          style={{ width: '' }}
          className="card bg-base-100 w-96 text-black shadow-2xl hover:bg-red-100  hover:shadow-inner"
        >
          <div className="flex justify-end">
            {/* <button style={{ position: 'absolute' }} onClick={toPdf}>
              <FaFileDownload className="text-secondary text-5xl " />
            </button> */}
            <ReactToPdf targetRef={cardRef} filename={pdfFilename}>
              {({ toPdf }) => (
                <button style={{ position: 'absolute' }} onClick={toPdf}>
                  <FaFileDownload className="text-white text-5xl " />
                </button>
              )}
            </ReactToPdf>
          </div>
          <figure>
            <img
              className="w-full "
              src={complain?.image}
              alt=""
              style={{ height: '350px' }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-lg">
              {' '}
              <span className="font-bold"> Division :</span>
              {complain?.division}
            </h2>
            <h2 className="card-title text-lg font-medium ">
              {' '}
              <span className="font-bold"> District : </span>
              {complain?.district}
            </h2>
            <h2 className="card-title  text-sm font-medium">
              {' '}
              <span className="font-bold text-lg"> Ministry : </span>
              {complain?.ministry}
            </h2>
            <h2 className="card-title  text-sm font-medium">
              {' '}
              <span className="font-bold text-lg"> Current Location : </span>
              {complain?.location}
            </h2>
            <h2 className="card-title  text-sm font-medium">
              {' '}
              <span className="font-bold text-lg"> Date : </span>
              {complain?.date}
            </h2>
            <h2 className="card-title  text-sm font-medium">
              {' '}
              <span className="font-bold text-lg"> Complain : </span>
              {complain?.complain}
            </h2>
            <h2 className="card-title  text-sm font-medium">
              {' '}
              <span className="font-bold text-lg"> Complain by : </span>
              {complain?.profile?.name}
            </h2>
          </div>
          <div>
            <div className="mb-2 p-2 flex justify-between">
              <div>
                {userEmail === 'abc@def.com' ? (
                  <>
                    {' '}
                    {review ? (
                      <button
                        onClick={() => setReview(false)}
                        className="btn font-bold btn-primary text-white"
                      >
                        minimize Review{' '}
                      </button>
                    ) : (
                      <button
                        onClick={() => setReview(true)}
                        className="btn font-bold btn-accent text-white"
                      >
                        Add Review{' '}
                      </button>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
              {arrow ? (
                <button onClick={() => setArrow(false)}>
                  <BiUpArrowCircle className="text-4xl font-bold mr-4 text-primary" />
                </button>
              ) : (
                <button onClick={() => setArrow(true)}>
                  <BiDownArrowCircle className="text-4xl font-bold mr-4 text-primary" />
                </button>
              )}
            </div>
            {/* add review */}
            <div>
              {review ? (
                <div>
                  <AddReview email={complain?.email} setReview={setReview} />
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* show review */}
            <div>
              {arrow ? (
                <div>
                  {reviews.map(review => (
                    <ShowReview key={review._id} review={review}></ShowReview>
                  ))}
                </div>
              ) : (
                <></>
              )}

              {/* review */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComplain;
