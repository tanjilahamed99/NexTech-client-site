const Banner = () => {
    return (
        <div className="hero min-h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Tw41KQn/pngwing-com-13.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex items-center mt-10 justify-center text-white">
                <div className="w-1/2 pl-5">
                    <div className="w-full">
                        <h1 className="mb-5 text-5xl font-bold">NexTech: Unleashing Tomorrows Innovations Today!</h1>
                        <p className="mb-5">Dive into the dynamic world of technology at TechHub, where cutting-edge meets user-friendly. Explore the latest gadgets, stay ahead with insightful reviews, and immerse yourself in the future of tech trends. Your gateway to innovation starts here. Join the digital revolution with TechHub – Where Tomorrow Happens Today!</p>
                        <button className="btn btn-outline text-white">Get Started</button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="w-full h-[500px]" src="https://i.ibb.co/vqbttr9/pngwing-com-12.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;