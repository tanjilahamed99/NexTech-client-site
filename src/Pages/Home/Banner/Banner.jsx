const Banner = () => {
    //     <img src="https://i.ibb.co/TwfNBTb/steve-ding-T42j-x-LOqw0-unsplash.jpg" alt="steve-ding-T42j-x-LOqw0-unsplash" border="0">
    // <img src="https://i.ibb.co/b2t56fz/oliver-pecker-HONJP8-Dyi-SM-unsplash.jpg" alt="oliver-pecker-HONJP8-Dyi-SM-unsplash" border="0">
    // <img src="https://i.ibb.co/KzKdrS1/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg" alt="andrew-neel-cckf4-Ts-HAuw-unsplash" border="0">
    // <img src="https://i.ibb.co/n3w6BgQ/julian-o-hayon-Bs-zng-H79-Ds-unsplash.jpg" alt="julian-o-hayon-Bs-zng-H79-Ds-unsplash" border="0"></img>
    return (
        <div className="hero min-h-screen bg-center bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/b2t56fz/oliver-pecker-HONJP8-Dyi-SM-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-70 "></div>
            <div className="flex flex-col-reverse py-10 md:flex-row items-center mt-10 justify-center text-white">
                <div className="md:w-1/2 pl-5">
                    <div className="w-full">
                        <h1 className="mb-5 text-5xl font-bold">NexTech: Unleashing Tomorrows Innovations Today!</h1>
                        <p className="mb-5">Dive into the dynamic world of technology at TechHub, where cutting-edge meets user-friendly. Explore the latest gadgets, stay ahead with insightful reviews, and immerse yourself in the future of tech trends. Your gateway to innovation starts here. Join the digital revolution with TechHub – Where Tomorrow Happens Today!</p>
                        <button className="btn btn-outline text-white">Get Started</button>
                    </div>
                </div>
                <div className="w-1/2 mx-auto">
                    <img className="w-[80%] md:h-[500px] h-[300px] mx-auto" src="https://i.ibb.co/DkydXNK/pngwing-com-20.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;