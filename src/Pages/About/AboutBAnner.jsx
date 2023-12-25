import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const AboutBAnner = () => {
    return (
        <div className="flex justify-center flex-col lg:flex-row items-center gap-10 my-5 md:my-10">
            <div className="lg:w-1/2 w-full">
                <img className="rounded-2xl w-full" src="https://i.ibb.co/Wp6GLH1/bruce-mars-8-YG31-Xn4d-Sw-unsplash.jpg" alt="" />
            </div>
            <div className="lg:w-1/2 w-full px-5">
                <h2 className="font-bold md:text-3xl mb-3">
                    Discovering the Future: Navigating Tech Landscapes with Insightful Content and <span className="text-red-600">Cutting-Edge Perspectives</span>
                </h2>
                <p>
                    Embark on an exhilarating odyssey through our tech haven. Immerse yourself in groundbreaking innovations, gain profound insights, and empower your journey through the pulsating heart of the digital frontier. Unleash the power of knowledge as we navigate the cutting edge, together forging the future of technology
                </p>
                <div className="mt-5 flex flex-col md:flex-row xl:gap-20 gap-5 md:items-center ">
                    <div className="text-xl">
                        <h2 className="flex items-center gap-2">
                            Total : <span className="font-bold">+200 </span><MdProductionQuantityLimits className="text-2xl"></MdProductionQuantityLimits>Products
                        </h2>
                    </div>
                    <div className="text-xl">
                        <h2 className="flex items-center gap-3">
                            Users : <span className="font-bold">+1000 </span><FaUserFriends className="text-2xl"></FaUserFriends>
                        </h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutBAnner;