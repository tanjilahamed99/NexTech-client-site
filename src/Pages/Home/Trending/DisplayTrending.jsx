import PropTypes from 'prop-types';
import { IoTriangleSharp } from "react-icons/io5";
import UseAxiosPublic from '../../../Hooks/AxiosPublic/UseAxiosPublic';
import UseAuth from '../../../Hooks/useAuth/UseAuth';
import useTrending from '../../../Hooks/useTrending/useTrending';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const DisplayTrending = ({ trendingData }) => {
    const { name, brand, image, upload_date, upVote, tags, _id } = trendingData
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()
    const [, refetch] = useTrending()
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()
    const [vote, setVote] = useState(false)

    const handleVote = () => {
        if (user) {
            axiosPublic.patch(`/trending?id=${_id}&upVote=${upVote}`)
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
        <div className="card shadow-xl  py-5 rounded-br-[100px] rounded-tl-[70px]  bg-gradient-to-r from-purple-100 to-blue-100">
            <img className='md:h-[250px] md:w-[250px] xl:h-[300px] xl:w-[300px] h-[200px] w-[200px] mx-auto rounded-2xl' src={image} alt="" />
            <div className="p-5 lg:p-7">
                <Link to={`/trendingDetail/${_id}`}>
                    <h2 className=" font-bold ">{name}</h2>
                </Link>
                <div className='flex md:flex-row  gap-3 mt-2 justify-between flex-col md:items-center font-semibold text-sm'>
                    <p className='font-bold text-sm'>{brand}</p>
                    <p>
                        {
                            upload_date.slice(0, 10)
                        }
                    </p>
                </div>
                <div className="card-actions mt-3 flex justify-between items-center">
                    <button onClick={handleVote} disabled={disabled} className='btn btn-sm btn-outline text-xl '><IoTriangleSharp className={vote ? 'text-red-600' : 'text-black'}></IoTriangleSharp>{upVote}</button>

                </div>
                <hr className='text-black text-lg my-4 border border-black' />
                <div className='flex flex-col flex-wrap md:flex-row md:items-center w-fit md:gap-2 gap-2'>
                    <p>#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                </div>
            </div>
        </div>
    );
};

DisplayTrending.propTypes = {
    trendingData: PropTypes.object
};

export default DisplayTrending;