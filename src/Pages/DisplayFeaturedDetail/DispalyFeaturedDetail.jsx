import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/AxiosPublic/UseAxiosPublic";
import useFeatured from "../../Hooks/useFeatured/useFeatured";

const DisplayFeaturedDetail = () => {
    const { name, brand, image, upload_date, upvote, tags, _id, reported } = useLoaderData()

    const axiosPublic = UseAxiosPublic()
    const [, refetch] = useFeatured()

    // console.log(_id)

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
                axiosPublic.put(`/featuredReport/${id}`)
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

    // const 
    return (
        <div className="card flex flex-row gap-10 justify-center w-[70%] p-10 my-20 mx-auto shadow-xl">
            <img className='h-[300px] w-[300px] mx-auto' src={image} alt="" />
            <div className="card-body mt-5">
                <h2 className="text-2xl font-bold ">{name}</h2>
                <div className='flex items-center font-semibold text-sm'>
                    <p>{brand}</p>
                    <p>{upload_date}</p>
                </div>
                <h2 className="text-lg">Votes: <span className="font-bold">{upvote}</span></h2>
                <hr className='text-black text-lg my-4 border border-black' />
                <div className='flex items-center w-fit gap-4'>
                    <p>#{tags[0]}</p>
                    <p>#{tags[1]}</p>
                    <p>#{tags[2]}</p>
                </div>
                <div className="my-3">
                    {
                        reported ? <button className="btn btn-outline text-red-500">Already Reported</button> : <button onClick={() => handleReport(_id)} className="btn btn-outline text-red-500">Report</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default DisplayFeaturedDetail;