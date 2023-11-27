import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/AxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";

const DisplayTrendingDetails = () => {
    const axiosPublic = UseAxiosPublic()
    const { id } = useParams()

    const { data: trending, refetch } = useQuery({
        queryKey: ['trending', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/trending/${id}`)
            return res.data
        }
    })


    const handleReport = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to report this products",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.put(`/trendingReport/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Reported successful!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }


    return (
        <div className="card flex flex-row gap-10 justify-center w-[70%] p-10 my-20 mx-auto shadow-xl">
            <img className='h-[300px] w-[300px] mx-auto' src={trending?.image} alt="" />
            <div className="card-body mt-5">
                <h2 className="text-2xl font-bold ">{trending?.name}</h2>
                <div className='flex items-center font-semibold text-sm'>
                    <p>{trending?.brand}</p>
                    <p>{trending?.upload_date}</p>
                </div>
                <h2 className="text-lg">Votes: <span className="font-bold">{trending?.upvote}</span></h2>
                <hr className='text-black text-lg my-4 border border-black' />
                <div className='flex items-center w-fit gap-4'>
                    <p>#{trending?.tags[0]}</p>
                    <p>#{trending?.tags[1]}</p>
                    <p>#{trending?.tags[2]}</p>
                </div>
                <div className="my-3">
                    {
                        trending?.reported ? <button className="btn btn-outline text-red-500">Already Reported</button> : <button onClick={() => handleReport(trending?._id)} className="btn btn-outline text-red-500">Report</button>
                    }

                </div>
            </div>
        </div>
    )
};

export default DisplayTrendingDetails;