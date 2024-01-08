import SectionTittle from "../../../Shared/SectionTittle/SectionTittle";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const Testimonial = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
    })



    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="my-20 hidden lg:block container w-fit">
            <div>
                <SectionTittle subTittle={'Testimonials'} tittle={"Users Testimonials"}></SectionTittle>
                <h2 className="text-sm font-bold mt-5 ">Users Say</h2>

                <div ref={sliderRef} className="keen-slider my-5 ">
                    <div className="shadow-lg p-5 keen-slider__slide number-slide1">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/4JWn5WV/pngwing-com-7.png" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Tanjil Ahamed</h2>
                                <p className="text-sm font-bold">Frontend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={2}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">1 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                    <div className="shadow-lg p-5 keen-slider__slide number-slide2">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/QPC8YhW/download-20.jpg" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Sujan Hassan</h2>
                                <p className="text-sm font-bold">Backend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={5}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">10 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                    <div className="shadow-lg p-5 keen-slider__slide number-slide3">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/SJt9DdP/download-21.jpg" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Tanjil Ahamed</h2>
                                <p className="text-sm font-bold">Frontend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={2}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">1 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                    <div className="shadow-lg p-5 keen-slider__slide number-slide4">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/0h9DYQZ/download-24.jpg" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Tanjil Ahamed</h2>
                                <p className="text-sm font-bold">Frontend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={2}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">1 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                    <div className="shadow-lg p-5 keen-slider__slide number-slide5">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/FxM49V3/download-22.jpg" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Tanjil Ahamed</h2>
                                <p className="text-sm font-bold">Frontend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={2}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">1 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                    <div className="shadow-lg p-5 keen-slider__slide number-slide6">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/wcSVKYj/pngwing-com-10.png" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Tanjil Ahamed</h2>
                                <p className="text-sm font-bold">Frontend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={2}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">1 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                    <div className="shadow-lg p-5 keen-slider__slide number-slide7">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/HPPcD6G/download-23.jpg" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Tanjil Ahamed</h2>
                                <p className="text-sm font-bold">Frontend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={2}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">1 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                    <div className="shadow-lg p-5 keen-slider__slide number-slide8">
                        <div className="flex items-center gap-4 ">
                            <img className="w-10 h-10 rounded-full bg-purple-400" src="https://i.ibb.co/5kzyH8G/pngwing-com-6.png" alt="" />
                            <div>
                                <h2 className="text-2xl font-bold">Tanjil Ahamed</h2>
                                <p className="text-sm font-bold">Frontend developer</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center my-3">
                            <p >
                                <Rating
                                    className="text-2xl text-orange-500"
                                    placeholderRating={2}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-orange-500'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </p>
                            <p className="text-lg font-medium">1 Jun 2024</p>
                        </div>
                        <p>NexTech delivers a seamless user experience with well-researched content, engaging multimedia, and vibrant community interaction. Regular updates make it a go-to for tech enthusiasts, offering the latest trends and insights.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;