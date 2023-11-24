import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import UseAxiosPublic from '../../../Hooks/AxiosPublic/UseAxiosPublic';

const DisplayFeatured = ({ featured }) => {
    const axiosPublic = UseAxiosPublic()

    const [vote, setVote] = useState(false)

    const { name, brand, image, upload_date, upvote, tags } = featured

    const handleVote = () => {

        // const 

            setVote(true)
    }


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
                    <button onClick={handleVote} className='btn btn-sm btn-outline text-xl'><FaArrowCircleUp className={vote ? 'text-red-600' : 'text-black'}></FaArrowCircleUp>{upvote}</button>
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

DisplayFeatured.propTypes = {
    featured: PropTypes.object
};

export default DisplayFeatured;