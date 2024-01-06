const Location = () => {



    return (
        <div className='my-40 flex bg-slate-100 py-20 px-20 gap-5 items-center'>
            <div className="w-1/2">
                <h2 className="font-bold text-sm mb-4 text-purple-500">Our Locations</h2>
                <h2 className="text-3xl font-bold">Planning a visit ?</h2>
                <h2 className="text-3xl font-bold">Here is how you can find us.</h2>
                <p className="mt-4 text-[#757575] font-medium">Whether you are attending a scheduled meeting, workshop, or just dropping by, use the following directions to reach our office.</p>
                <div className="my-5 space-y-2">
                    <h2 className="font-bold text-xl"> Address:</h2>
                    <h2 className="text-[#757575] font-medium">15 Washington Square <br />
                        New York, NY 10075, USA</h2>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Working hours:</h2>
                    <p className="text-[#757575] font-medium">Monday - Friday: 8AM - 5PM</p>
                </div>
            </div>
            <div className="w-1/2">
                <img className="h-[550px] w-full" src="https://i.ibb.co/25d57pw/brooke-cagle-HRZUzo-X1e6w-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Location;