import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import UseAxiosPublic from '../../../Hooks/AxiosPublic/UseAxiosPublic';
import UseAuth from '../../../Hooks/useAuth/UseAuth';
import useFeatured from '../../../Hooks/useFeatured/useFeatured';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const DisplayFeatured = ({ featured }) => {
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()
    const [, refetch] = useFeatured()
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()

    const [vote, setVote] = useState(false)

    const { name, brand, image, upload_date, upvote, tags, _id } = featured

    const handleVote = () => {
        if (user) {
            axiosPublic.patch(`/featured?id=${_id}&upvote=${upvote}`)
                .then(res => {
                    if (res.data) {
                        Swal.fire({
                            icon: "success",
                            title: "successful Voted",
                            showConfirmButton: false,
                            timer: 1500
                        })
                        refetch()
                        setVote(true)
                        setDisabled(true)
                    }
                })
        }
        else {
            return navigate('/login')
        }

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
                    <button onClick={handleVote} disabled={disabled} className='btn btn-sm btn-outline text-xl'><FaArrowCircleUp className={vote ? 'text-red-600' : 'text-black'}></FaArrowCircleUp>{upvote}</button>
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