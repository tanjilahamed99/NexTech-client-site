const Banner = () => {
    return (
        <div className="hero min-h-screen bg-center bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/b2t56fz/oliver-pecker-HONJP8-Dyi-SM-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-70 "></div>
            <div className="flex flex-col-reverse lg:py-10 py-5 md:flex-row items-center lg:mt-10 justify-center text-white">
                <div className="lg:w-1/2 pl-5 w-full">
                    {/* banner */}
                    <div className="w-full">
                        <h1 className="mb-5 text-2xl lg:text-5xl font-bold">NexTech: Unleashing Tomorrows Innovations Today!</h1>
                        <p className="mb-5">Dive into the dynamic world of technology at TechHub, where cutting-edge meets user-friendly. Explore the latest gadgets, stay ahead with insightful reviews, and immerse yourself in the future of tech trends. Your gateway to innovation starts here. Join the digital revolution with TechHub – Where Tomorrow Happens Today!</p>
                        <button className="btn btn-outline text-white">Get Started</button>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full mx-auto">
                    <img className="md:w-[80%] lg:h-[500px] h-[350px] w-full mx-auto" src="https://i.ibb.co/DkydXNK/pngwing-com-20.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;