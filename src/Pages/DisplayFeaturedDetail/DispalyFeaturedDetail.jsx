import { useLoaderData } from "react-router-dom";

const DisplayFeaturedDetail = () => {
    const { name, brand, image, upload_date, upvote, tags } = useLoaderData()

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
            </div>
        </div>
    );
};

export default DisplayFeaturedDetail;