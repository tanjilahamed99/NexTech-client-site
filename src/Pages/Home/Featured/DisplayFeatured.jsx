import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoTriangleSharp } from "react-icons/io5";
import UseAxiosPublic from '../../../Hooks/AxiosPublic/UseAxiosPublic';
import UseAuth from '../../../Hooks/useAuth/UseAuth';
import useFeatured from '../../../Hooks/useFeatured/useFeatured';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaBookmark } from "react-icons/fa";

const DisplayFeatured = ({ featured }) => {
    const axiosPublic = UseAxiosPublic()
    const { user } = UseAuth()
    const [, refetch] = useFeatured()
    const [disabled, setDisabled] = useState(false)
    const [bookmark, setBookmark] = useState(false)
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

    const handleBookMark = () => {

        const bookmarkData = { name, brand, image, upload_date, upvote, tags, productsId: _id, email: user?.email, userName: user.displayName }

        axiosPublic.post('/bookmark', bookmarkData)
            .then(res => {
                // console.log(res.data && )
                if (res.data && !res.data.Already) {
                    Swal.fire({
                        icon: "success",
                        title: "Bookmarked Added",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setBookmark(true)
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Already have',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="card shadow-xl">
            <img className='h-[300px] w-[300px] mx-auto' src={image} alt="" />
            <div className="card-body">
                <Link to={`/featuredDetail/${_id}`}>
                    <h2 className="text-lg font-bold ">{name}</h2>
                </Link>
                <div className='flex md:flex-row  flex-col md:items-center font-semibold text-sm'>
                    <p>{brand}</p>
                    <p>{upload_date}</p>
                </div>
                <div className="card-actions mt-3 flex justify-between items-center">
                    <button onClick={handleVote} disabled={disabled} className='btn btn-sm btn-outline text-xl'><IoTriangleSharp className={vote ? 'text-red-600' : 'text-black'}></IoTriangleSharp>{upvote}</button>

                    <button disabled={bookmark} onClick={handleBookMark} className='btn btn-sm btn-outline text-xl'><FaBookmark className={bookmark && 'text-yellow-600'}></FaBookmark></button>

                </div>
                <hr className='text-black text-lg my-4 border border-black' />
                <div className='flex flex-col md:flex-row md:items-center w-fit gap-4'>
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