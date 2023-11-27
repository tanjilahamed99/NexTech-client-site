import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/AxiosPublic/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/useAuth/UseAuth";
import { useForm } from "react-hook-form";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import DisplayReview from "../../Components/DisplayReview";

const DisplayFeaturedDetail = () => {
    const axiosPublic = UseAxiosPublic()
    const { register, handleSubmit } = useForm()
    const { id } = useParams()
    const { user } = UseAuth()
    const { data: featured, refetch } = useQuery({
        queryKey: ['featured', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/featured/${id}`)
            return res.data
        }
    })

    const { data: review = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/featuredReview/${id}`)
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

    // review
    const onSubmit = (data) => {
        const reviewData = {
            featuredId: id,
            featuredName: featured.name,
            userName: user.displayName,
            userPhoto: user.photoURL,
            rating: data.rating,
            desc: data.desc
        }

        axiosPublic.post('/featuredReview', reviewData)
            .then(res => {
                if (res.data) {
                    Swal.fire({
                        title: "review set successful!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            })

    }

    return (
        <div>
            <div className="card flex flex-row gap-10 justify-center w-[70%] p-10 my-20 mx-auto shadow-xl">
                <img className='h-[300px] w-[300px] mx-auto' src={featured?.image} alt="" />
                <div className="card-body mt-5">
                    <h2 className="text-2xl font-bold ">{featured?.name}</h2>
                    <div className='flex items-center font-semibold text-sm'>
                        <p>{featured?.brand}</p>
                        <p>{featured?.upload_date}</p>
                    </div>
                    <h2 className="text-lg">Votes: <span className="font-bold">{featured?.upvote}</span></h2>
                    <hr className='text-black text-lg my-4 border border-black' />
                    <div className='flex items-center w-fit gap-4'>
                        <p>#{featured?.tags[0]}</p>
                        <p>#{featured?.tags[1]}</p>
                        <p>#{featured?.tags[2]}</p>
                    </div>
                    <div className="my-3">
                        {
                            featured?.reported ? <button className="btn btn-outline text-red-500">Already Reported</button> : <button onClick={() => handleReport(featured?._id)} className="btn btn-outline text-red-500">Report</button>
                        }

                    </div>
                </div>
            </div>
            <div>
                {/* review section */}
                {/* display reviews */}
                <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2  lg:grid-cols-3">
                    {
                        review.map(item => <DisplayReview key={item._id} review={item}></DisplayReview>)
                    }
                </div>
                {/* review form */}
                <div className="my-10">
                    <SectionTittle tittle={'Post Review'} subTittle={'Review'}></SectionTittle>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid my-10 grid-cols-2 items-center justify-center mx-auto gap-10">
                        <div className="w-[80%] mx-auto">
                            <h2 className="font-bold text-sm mb-2">Name</h2>
                            <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full" value={user.displayName} disabled />
                        </div>
                        <div className="w-[80%] mx-auto">
                            <h2 className="font-bold text-sm mb-2">Photo</h2>
                            <input {...register("photo")} type="text" placeholder="Type here" className="input input-bordered w-full" value={user.photoURL} disabled />
                        </div>
                        <div className="w-[80%] mx-auto">
                            <h2 className="font-bold text-sm mb-2">Description</h2>
                            <textarea {...register("desc")} className="textarea textarea-bordered w-full" placeholder="Bio" required></textarea>
                        </div>
                        <div className="w-[80%] mx-auto">
                            <h2 className="font-bold text-sm mb-2">Rating</h2>
                            <select {...register("rating")} className="select select-bordered w-full" required>
                                <option disabled>Who shot first?</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <input type="submit" value={'Submit'} placeholder="Type here" className="input col-span-2 btn-outline input-bordered w-[90%] mx-auto" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DisplayFeaturedDetail;