import PropTypes from 'prop-types';
import { IoTriangleSharp } from "react-icons/io5";

const DisplayTrending = ({ trendingData }) => {
    const { name, brand, image, upload_date, upVote, tags } = trendingData
    return (
        <div className="card shadow-xl">
            <img className='h-[300px] w-[300px] mx-auto' src={image} alt="" />
            <div className="card-body">
                <h2 className="text-lg font-bold ">{name}</h2>
                <div className='flex items-center font-semibold text-sm'>
                    <p>{brand}</p>
                    <p>{upload_date}</p>
                </div>
                <div className="card-actions mt-3">
                    <button className='btn btn-sm btn-outline text-xl'><IoTriangleSharp></IoTriangleSharp>{upVote}</button>
                </div>
                <hr className='text-black text-lg my-4 border border-black' />
                <div className='flex items-center w-fit gap-4'>
                    <p>#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                    <p>#{tags[2]}</p>
                </div>
            </div>
        </div>
    );
};

DisplayTrending.propTypes = {
    trendingData: PropTypes.object
};

export default DisplayTrending;