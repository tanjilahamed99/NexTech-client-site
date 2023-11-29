import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
const DisplayReview = ({ review }) => {
    const { featuredName, userName, userPhoto, rating, desc } = review
    return (
        <div>
            <div className="card   bg-base-100 shadow-xl">
                <div className='flex pl-5 gap-2 items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src={userPhoto} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{userName}</h2>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                </div>
                <div className="card-body">
                    <p className='font-bold text-xl'>{featuredName}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

DisplayReview.propTypes = {
    review: PropTypes.object
}

export default DisplayReview;